import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { FiArrowLeft, FiDownload, FiExternalLink, FiInfo, FiMinus, FiPlus } from 'react-icons/fi';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const MIN_ZOOM = 0.8;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.15;

const DocumentViewer = ({ document }) => {
    const previewRef = useRef(null);
    const [numPages, setNumPages] = useState(0);
    const [previewWidth, setPreviewWidth] = useState(0);
    const [loadError, setLoadError] = useState('');
    const [zoom, setZoom] = useState(1);

    useEffect(() => {
        const previousTitle = window.document.title;
        window.document.title = `${document.title} | Darshil Desai`;
        return () => {
            window.document.title = previousTitle;
        };
    }, [document.title]);

    useEffect(() => {
        const preview = previewRef.current;
        if (!preview) return undefined;

        const updateWidth = () => setPreviewWidth(preview.clientWidth);
        updateWidth();

        const observer = new ResizeObserver(updateWidth);
        observer.observe(preview);
        return () => observer.disconnect();
    }, []);

    const changeZoom = (amount) => {
        setZoom((current) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current + amount)));
    };

    const fittedPageWidth = Math.min(Math.max(previewWidth - 32, 280), 900);
    const renderedPageWidth = fittedPageWidth * zoom;

    return (
        <main className="document-page">
            <header className="document-header">
                <div className="document-heading">
                    <a className="document-back" href="/#home">
                        <FiArrowLeft aria-hidden="true" />
                        Back to portfolio
                    </a>
                    <div>
                        <p>Darshil Desai</p>
                        <h1>{document.title}</h1>
                    </div>
                </div>
                <div className="document-actions">
                    <span className="document-copy-hint">
                        <FiInfo aria-hidden="true" />
                        Select text in the preview to copy it
                    </span>
                    <a href={document.pdfUrl} target="_blank" rel="noreferrer">
                        <FiExternalLink aria-hidden="true" />
                        Full screen
                    </a>
                    <a href={document.pdfUrl} download={document.fileName}>
                        <FiDownload aria-hidden="true" />
                        Download PDF
                    </a>
                </div>
            </header>

            <section className="document-preview" aria-label={`${document.title} preview`}>
                <div className="document-toolbar" aria-label="PDF zoom controls">
                    <button
                        type="button"
                        onClick={() => changeZoom(-ZOOM_STEP)}
                        disabled={zoom <= MIN_ZOOM}
                        aria-label="Zoom out"
                    >
                        <FiMinus aria-hidden="true" />
                    </button>
                    <span aria-live="polite">{Math.round(zoom * 100)}%</span>
                    <button
                        type="button"
                        onClick={() => changeZoom(ZOOM_STEP)}
                        disabled={zoom >= MAX_ZOOM}
                        aria-label="Zoom in"
                    >
                        <FiPlus aria-hidden="true" />
                    </button>
                    <button className="document-fit-button" type="button" onClick={() => setZoom(1)}>
                        Fit width
                    </button>
                </div>

                <div className="document-pages" ref={previewRef}>
                    {loadError ? (
                        <div className="document-load-state" role="alert">
                            <p>The PDF preview could not be loaded.</p>
                            <a href={document.pdfUrl} target="_blank" rel="noreferrer">Open the PDF directly</a>
                        </div>
                    ) : (
                        <Document
                            file={document.pdfUrl}
                            loading={<div className="document-load-state">Loading preview…</div>}
                            onLoadSuccess={({ numPages: pages }) => setNumPages(pages)}
                            onLoadError={() => setLoadError('Unable to load PDF')}
                        >
                            {previewWidth > 0 && Array.from({ length: numPages }, (_, index) => (
                                <Page
                                    key={`page-${index + 1}`}
                                    pageNumber={index + 1}
                                    width={renderedPageWidth}
                                    renderAnnotationLayer
                                    renderTextLayer
                                />
                            ))}
                        </Document>
                    )}
                </div>
            </section>
        </main>
    );
};

export default DocumentViewer;
