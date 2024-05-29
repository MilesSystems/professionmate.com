import {useState, useEffect, useRef, PropsWithChildren, CSSProperties, HTMLAttributes} from 'react';

export enum eParallaxStyle {
    FIXED,
    SCROLL,
}

interface ParallaxProps {
    height?: string;
    backgroundImage?: string;
    parallaxStyle?: eParallaxStyle;
    style?: CSSProperties,
    className?:string
}

const Parallax: React.FC<PropsWithChildren<ParallaxProps>> = (
    {
        height = '50vh',
        className = '',
        style = {},
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

    let parallaxStyles: CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: parallaxStyle === eParallaxStyle.FIXED ? 'fixed' : 'scroll',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
    };

    const parallaxSpeed = 0.2;


    switch (parallaxStyle) {
        case eParallaxStyle.FIXED:
            parallaxStyles.backgroundPosition = 'center';
           // style.backgroundPositionY = `calc( ${offset * parallaxSpeed}px)`;
            break;
        case eParallaxStyle.SCROLL:
            // This value affects the speed of the parallax effect
            // You might need to adjust the multiplier to get the desired effect
            parallaxStyles.backgroundPositionY = `calc(50% + ${offset * parallaxSpeed}px)`;
            parallaxStyles.backgroundSize = '200%'
            break;
    }



    return (
        <div className={className} ref={parallaxRef} style={parallaxStyles}>

            {children}

        </div>
    );
};

export default Parallax;
