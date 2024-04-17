import {useState, useEffect, useRef, PropsWithChildren, CSSProperties} from 'react';

export enum eParallaxStyle {
    FIXED,
    SCROLL,
}

interface ParallaxProps {
    height?: string;
    backgroundImage?: string;
    parallaxStyle?: eParallaxStyle;
}

const Parallax: React.FC<PropsWithChildren<ParallaxProps>> = (
    {
        height = '50vh',
        backgroundImage,
        children,
        parallaxStyle = eParallaxStyle.FIXED
    }) => {
    const [offset, setOffset] = useState(0);
    const parallaxRef = useRef<HTMLDivElement>(null);

    const getOffset = () => {
        if (parallaxRef.current) {
            const elementRect = parallaxRef.current.getBoundingClientRect();
            const elementY = elementRect.top + window.pageYOffset;
            const distanceToCenter = window.pageYOffset + elementRect.height / 2 - window.innerHeight / 2;
            const elementCenterY = elementY + elementRect.height / 2;
            const viewportCenterY = window.pageYOffset + window.innerHeight / 2;
            return elementCenterY - viewportCenterY; // distance from center of the element to center of the viewport
        }
        return 0;
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentOffset = getOffset();
            setOffset(currentOffset);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Set initial position

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    let style: CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: parallaxStyle === eParallaxStyle.FIXED ? 'fixed' : 'scroll',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    if (parallaxStyle === eParallaxStyle.SCROLL) {
        // This value affects the speed of the parallax effect
        // You might need to adjust the multiplier to get the desired effect
        const parallaxSpeed = 0.2;
        style.backgroundPositionY = `calc(50% + ${offset * parallaxSpeed}px)`;
    }

    return (
        <div ref={parallaxRef} style={style}>
            {children}
        </div>
    );
};

export default Parallax;
