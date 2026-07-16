import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateVisibility = () => setIsVisible(window.scrollY > 480);
        updateVisibility();
        window.addEventListener('scroll', updateVisibility, { passive: true });
        return () => window.removeEventListener('scroll', updateVisibility);
    }, []);

    const returnToTop = () => {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    };

    return (
        <button
            className={`back-to-top ${isVisible ? 'back-to-top-visible' : ''}`}
            type="button"
            onClick={returnToTop}
            aria-label="Back to top"
            title="Back to top"
            tabIndex={isVisible ? 0 : -1}
        >
            <FiArrowUp aria-hidden="true" />
        </button>
    );
};

export default BackToTop;
