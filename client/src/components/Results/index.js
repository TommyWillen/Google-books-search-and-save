import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Card, Row, Col, Badge } from "react-bootstrap";

function Results (props) {
  
   const [savedBooks, setSavedBooks] = useState ([])

  useEffect(() => {
    API.savedBooks()
    .then((savedBook) => setSavedBooks( savedBook ))
    .catch((err) => console.error(err));
  },[])

  function handleSave (book) {
    if (savedBooks.map((book) => book._id).includes(book._id)) {
      API.deleteBook(book._id)
        .then((deletedBook) =>
          setSavedBooks(savedBooks.filter(
              (book) => book._id !== deletedBook._id
            ))
        )
        .catch((err) => console.error(err));
    } else {
      API.saveBook(book)
        .then((savedBook) =>
          setSavedBooks(savedBooks.concat([savedBook]))
        )
        .catch((err) => console.error(err));
    }
  };
    return (
      <div>
        {!props.books ? (
          <h1 className="text-center">No Results to Display</h1>
        ) : (
          <div>
            {props.books.map((result) => (
              <Card className="mb-3" key={result._id}>
                <Row>
                  <div className="col-md-2">
                    <img
                      alt={result.title}
                      className="img-fluid"
                      src={result.image}
                    />
                  </div>
                  <Col md={10}>
                    <Card.Body>
                      <Card.Title>
                        {result.title} by {result.authors}
                      </Card.Title>
                      <Card.Text>{result.description}</Card.Text>
                      <Badge>
                        <a
                          href={result.link}
                          className="btn badge-pill btn-outline-dark mt-3"
                        >
                          View
                        </a>
                        <Badge
                        pill
                          onClick={() => handleSave(result)}
                          variant="warning"
                          className="mt-3 ml-3"
                        >
                          {savedBooks
                            .map((book) => book._id)
                            .includes(result._id)
                            ? "Unsave"
                            : "Save"}
                        </Badge>
                      </Badge>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
}

export default Results;
