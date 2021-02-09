import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Results from "../components/Results";
import Container from "react-bootstrap/Container"

function Saved() {
    const [savedBooks, setSavedBooks] = useState([])

    useEffect(() => {
      API.savedBooks()
            .then(savedBook => setSavedBooks(savedBook))
            .catch(err => console.error(err));
    },[])

        return (
            <Container>
                <h2>Saved books</h2>
                <Results books={savedBooks} />
            </Container>
        )
}

export default Saved;