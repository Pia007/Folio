import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

// ensure that the scroll is always at the top of the page
const ScrollToTop = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
};

export default ScrollToTop;