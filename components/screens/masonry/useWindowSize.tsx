'use client';
import { useEffect, useState } from 'react';

export function useWindowSize() {

    const width = document.getElementById('right')?.clientWidth;

    function getSize() {
        return {
            width
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

    }, [width]);

    return windowSize;
}
