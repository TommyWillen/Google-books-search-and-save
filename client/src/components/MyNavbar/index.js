import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

function MyNavbar() {
    return (


        <Navbar expand="lg" className="text-light" style={{backgroundColor: "#277eb8"}}>
            <Container>
                <Link className="navbar-brand" to="/">Google Books</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Saved</Link>
                    </li>
                </ul>
            </Container>
        </Navbar>

    );
}

export default MyNavbar;
