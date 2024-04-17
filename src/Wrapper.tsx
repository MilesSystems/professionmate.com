import Parallax from "src/components/Parallax";
import {FC, PropsWithChildren} from "react";
import TruncatedIcosahedron from 'assets/PM.svg'

export default function Wrapper({children}: PropsWithChildren<FC>) {

    console.log("Wrapper TSX RENDER");

    return <>
        <nav className="navbar fixed-top navbar-expand-lg" style={{
            height: "5em",
            backgroundColor: "whitesmoke",
        }}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={TruncatedIcosahedron} alt="Logo" width="30" height="24"
                         className="d-inline-block align-text-top"/>
                    Profession Mate
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Allies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        <Parallax/>
        <div className="container" style={{
            backgroundColor: "green",
        }}>
            {children}
        </div>

    </>

}