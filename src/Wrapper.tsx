import Parallax from "src/components/Parallax";
import {FC, PropsWithChildren} from "react";
import PM from 'assets/PM.svg'
import {HOME} from "src/Home";
import {ALLIES} from "src/pages/Allies/Allies";
import {CONTACT} from "src/pages/Contact/Contact";
import {PRICING} from "src/pages/Pricing/Pricing";
import {REVIEWS} from "src/pages/Reviews/Reviews";
import {SERVICES} from "src/pages/Services/Services";

export default function Wrapper({children}: PropsWithChildren<FC>) {

    console.log("Wrapper TSX RENDER");

    return <>
        <nav className="navbar fixed-top navbar-expand-lg" style={{
            height: "7vh",
            backgroundColor: "whitesmoke",
        }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={PM} alt="Logo" width="30" height="24"
                         className="d-inline-block align-text-top"/>
                    Profession Mate
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={'d-flex justify-content-end'}>
                    <div className="collapse navbar-collapse " id="navbarColor02" style={{
                        backgroundColor: "whitesmoke",
                        padding: "1em",
                    }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href={'/' + HOME}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={'/' + SERVICES}>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={'/' + ALLIES}>Allies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={'/' + PRICING}>Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={'/' + REVIEWS}>Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={'/' + CONTACT}>Contact</a>
                            </li>
                        </ul>
                        {/*<form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>*/}
                    </div>
                </div>
            </div>
        </nav>
        <main className="container-fluid g-0 flex-grow-1" style={{
            backgroundColor: "whitesmoke",
            paddingTop: "7vh",
            minHeight: "90vh",
        }}>
            {children}
        </main>

        <footer className="bd-footer py-4 py-md-5 bg-body-tertiary">
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

    </>

}