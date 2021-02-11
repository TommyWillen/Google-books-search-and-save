import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"

function SearchForm(props) {
    const [searchState, setSearchState] = useState("");

    function handleInputChange(event) {
        const value = event.target.value;
        setSearchState(value);
      };
    
      function handleFormSubmit (event) {
        event.preventDefault();
        props.searchBook(searchState);
        setSearchState("")
      };

    return (
    <Container>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Label htmlFor="search">
            <h2>Search for and save Books of Interest</h2>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Search for a book"
            id="search"
            name="search"
            onChange={handleInputChange}
            value={searchState}
          ></Form.Control>
          
          <Button
            // onClick={props.handleFormSubmit}
            variant="dark"
            className="mt-3 mb-5"
            type="submit"
          >
            Search
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default SearchForm;
