import { useEffect } from 'react';
import { FiArrowLeft, FiDownload, FiExternalLink, FiInfo } from 'react-icons/fi';

const DocumentViewer = ({ document }) => {
    useEffect(() => {
        const previousTitle = window.document.title;
        window.document.title = `${document.title} | Darshil Desai`;
        return () => {
            window.document.title = previousTitle;
        };
    }, [document.title]);

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
            <iframe src={`${document.pdfUrl}#view=FitH`} title={document.description} />
            <noscript>
                <p>
                    JavaScript is required for the embedded preview.{' '}
                    <a href={document.pdfUrl}>Open the PDF directly.</a>
                </p>
            </noscript>
        </section>
        </main>
    );
};

export default DocumentViewer;
