import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

function SearchForm(props) {
  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="search">
            <h2>Search for and save Books of Interest</h2>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Search for a book"
            id="search"
            name="search"
            onChange={props.handleInputChange}
            value={props.search}
          ></Form.Control>
          
          <Button
            onClick={props.handleFormSubmit}
            variant="dark"
            className="mt-3 mb-5"
          >
            Search
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default SearchForm;
