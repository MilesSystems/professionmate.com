import { useState, useEffect } from 'react';
import background from 'assets/dalle12.webp';

export default function Parallax() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundAttachment: "fixed",
            backgroundPosition: `center bottom ${30 - offset * 0.05}vh`, // This aligns the image to the bottom initially
            //backgroundPosition: `center calc(100% - ${offset * 0.5}px)`, // Starts from bottom, moves up at half scroll speed
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textShadow: "0 0 5px black"
        }}>
            <div className="container">
                <h1>Welcome to My Site</h1>
                <p>This is an example of a dynamic parallax effect in Bootstrap 5.</p>
            </div>
        </div>
    );
}
