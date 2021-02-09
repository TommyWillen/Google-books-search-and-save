import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import API from "../utils/API";
import Container from "react-bootstrap/Container"

function Search() {
  const [bookState, setBookState] = useState({
    search: "",
    books: [],
  });

  function makeBook(bookData)  {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
    };
  };

  function searchBook (query) {
    API.getBook(query)
      .then((res) =>
        setBookState({
          books: res.data.items.map((bookData) => makeBook(bookData)),
        })
      )
      .catch((err) => console.error(err));
  };

  function handleInputChange(event) {
    console.log(event.target)
    const value = event.target.value;
    setBookState({
      search: value,
    });
  };

  function handleFormSubmit (event) {
    event.preventDefault();
    searchBook(bookState.search);
  };

  return (
    <div>
      <SearchForm
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <Container>
        <h2>Results</h2>
        <Results books={bookState.books} />
      </Container>
    </div>
  );
}

export default Search;
