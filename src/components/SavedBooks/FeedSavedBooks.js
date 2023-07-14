import React, { useContext } from "react";
import Book from "./Book";
import DataContext from "../../context/DataContext";

const FeedSavedBooks = () => {
  let { savedBooks } = useContext(DataContext);
  return (
    <>
      {savedBooks.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </>
  );
};

export default FeedSavedBooks;
