import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import API from "../utils/API";
import Container from "react-bootstrap/Container";

function Search() {
  const [bookState, setBookState] = useState([]);

  function makeBook(bookData) {
    console.log(bookData.volumeInfo.imageLinks);
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks?.thumbnail || "No Image Found",
      link: bookData.volumeInfo.previewLink,
    };
  }

  function searchBook(query) {
    console.log(query);
    API.getBook(query)
      .then((res) => {
        setBookState(res.data.items.map((bookData) => makeBook(bookData)));
      })
      .catch((err) => console.error(err));
  }

  // function handleInputChange(event) {
  //   const value = event.target.value;
  //   setBookState({
  //     search: value,
  //   });
  // };

  // function handleFormSubmit (event) {
  //   event.preventDefault();
  //   searchBook(bookState.search);
  // };

  return (
    <div>
      <SearchForm
        searchBook={searchBook}
        // handleInputChange={handleInputChange}
        // handleFormSubmit={handleFormSubmit}
      />
      <Container>
        <h2>Results</h2>
        <Results books={bookState} />
      </Container>
    </div>
  );
}

export default Search;
