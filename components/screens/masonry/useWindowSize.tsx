'use client';
import { useEffect, useState } from 'react';

export function useWindowSize() {
    function getSize() {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        function handleResize() {
            setWindowSize(getSize());
        }
        handleResize();

        window.addEventListener('orientationchange', handleResize);
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
        window.addEventListener('reload', handleResize);

        return () => {
            window.removeEventListener('orientationchange', handleResize);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('load', handleResize);
            window.removeEventListener('reload', handleResize);
        };
    }, []);

    return windowSize;
}
