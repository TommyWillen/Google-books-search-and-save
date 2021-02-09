import React from "react";
import Container from "react-bootstrap/esm/Container";
import style from "..style.css";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
    return (
        <Jumbotron className="text-center" style={{backgroundColor: "#277eb8"}}>
            <Container className="container text-light">
                <h1>Google Books Search</h1>
            </Container>
        </Jumbotron>
    );
}

export default Header;