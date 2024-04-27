import {Link} from "react-router-dom";
import Parallax from "src/components/Parallax";
import {FC, PropsWithChildren, useEffect, useState} from "react";
import PM from 'assets/PM.svg'
import {HOME} from "src/Home";
import {ALLIES} from "src/pages/Allies/Allies";
import {CONTACT} from "src/pages/Contact/Contact";
import {PRICING} from "src/pages/Pricing/Pricing";
import {REVIEWS} from "src/pages/Reviews/Reviews";
import {SERVICES} from "src/pages/Services/Services";
import PmFront from "assets/PM_Front.jpeg";

export default function Wrapper({children}: PropsWithChildren<FC>) {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log("Wrapper TSX RENDER");


    const headerRightLinks = [
        {
            title: 'Home',
            link: HOME
        },
        {
            title: 'Services',
            link: SERVICES
        },
        {
            title: 'Allies',
            link: ALLIES
        },
        {
            title: 'Pricing',
            link: PRICING
        },
        {
            title: 'Reviews',
            link: REVIEWS
        },
        {
            title: 'Contact',
            link: CONTACT
        }
    ]

    return <div style={{
        backgroundImage: `url(${PmFront})`,
        backgroundColor: "black",

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        overflow: 'auto',
    }}>
        <nav className="navbar fixed-top navbar-expand-lg" style={{
            height: "7vh",
            minHeight: "80px",
            backgroundColor: isScrolled ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0.5)",
            transition: 'background-color 0.5s ease'
        }}>
            <div className="container">
                <a className="navbar-brand" href="#" style={{
                    color: isScrolled ? "black" : "whitesmoke",
                    transition: 'color 0.5s ease',
                    fontSize: '1.5em'
                }}>
                    <img src={PM} alt="Logo" width="50" height="44"
                         className="d-inline-block align-text-center"/>
                    Profession Mate
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={'d-flex justify-content-end'}>
                    <div className="collapse navbar-collapse " id="navbarColor02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex" style={{
                            color: isScrolled ? "black" : "whitesmoke",
                            transition: 'color 0.5s ease'
                        }}>
                            {headerRightLinks.map(link => <li className="nav-item" style={{
                                color: isScrolled ? "black" : "whitesmoke",
                                transition: 'color 0.5s ease'
                            }}>
                                <Link className="nav-link active" aria-current="page" to={'/' + link.link} style={{
                                    color: isScrolled ? "black" : "whitesmoke",
                                    transition: 'color 0.5s ease',
                                    fontSize: '1.5em'
                                }}>{link.title}</Link>
                            </li>)}
                        </ul>
                        {/*<form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>*/}
                    </div>
                </div>
            </div>
        </nav>
        <main className="container-fluid g-0 flex-grow-1" >
            {children}
        </main>

        <footer className="bd-footer py-4 py-md-5 bg-body-tertiary" style={{
            backgroundColor: "rgba(0,0,0,0.5)",
        }}>
            <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
                           href="/" aria-label="Bootstrap">
                            <img src={PM} alt="Logo" width="50" height="50"/>
                            <span className="fs-5">Profession Mate</span>
                        </a>
                        <ul className="list-unstyled small">
                            <li className="mb-2">We understand that every career path has unique its own unique twists
                                and turns. Feel free to message or call us with any specific concerns.

                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/">Home</a></li>
                            <li className="mb-2"><a href="/docs/5.3/">Docs</a></li>
                            <li className="mb-2"><a href="/docs/5.3/examples/">Examples</a></li>
                            <li className="mb-2"><a href="https://icons.getbootstrap.com/">Icons</a></li>
                            <li className="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
                            <li className="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                            <li className="mb-2"><a href="https://cottonbureau.com/people/bootstrap" target="_blank"
                                                    rel="noopener">Swag Store</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Guides</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
                            <li className="mb-2"><a href="/docs/5.3/examples/starter-template/">Starter template</a>
                            </li>
                            <li className="mb-2"><a href="/docs/5.3/getting-started/webpack/">Webpack</a></li>
                            <li className="mb-2"><a href="/docs/5.3/getting-started/parcel/">Parcel</a></li>
                            <li className="mb-2"><a href="/docs/5.3/getting-started/vite/">Vite</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Projects</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap" target="_blank"
                                                    rel="noopener">Bootstrap 5</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev" target="_blank"
                                                    rel="noopener">Bootstrap 4</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/icons" target="_blank"
                                                    rel="noopener">Icons</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/rfs" target="_blank"
                                                    rel="noopener">RFS</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/examples/" target="_blank"
                                                    rel="noopener">Examples repo</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Community</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap/issues" target="_blank"
                                                    rel="noopener">Issues</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" target="_blank"
                                                    rel="noopener">Discussions</a></li>
                            <li className="mb-2"><a href="https://github.com/sponsors/twbs" target="_blank"
                                                    rel="noopener">Corporate sponsors</a></li>
                            <li className="mb-2"><a href="https://opencollective.com/bootstrap" target="_blank"
                                                    rel="noopener">Open Collective</a></li>
                            <li className="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5"
                                                    target="_blank" rel="noopener">Stack Overflow</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    </div>

}