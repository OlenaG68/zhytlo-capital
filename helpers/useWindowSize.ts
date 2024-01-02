import { useEffect, useState } from 'react';

interface IState {
    width?: number;
    height?: number;
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState<IState>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);
    return windowSize;
}
