import { useEffect } from 'react';
import { useLocation } from 'react-router';

// ensure that the scroll is always at the top of the page
const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return children;
};

export default ScrollToTop;