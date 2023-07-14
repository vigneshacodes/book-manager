import React, { useContext } from "react";
import FeedSavedBooks from "./FeedSavedBooks";
import DataContext from "../../context/DataContext";
import "../Home/Home.css";

const SavedBooks = () => {
  let { savedBooks } = useContext(DataContext);
  return (
    <main className="Home">
      {savedBooks.length ? (
        <FeedSavedBooks />
      ) : (
        <p style={{ marginTop: "2rem" }}>No books to display.</p>
      )}
    </main>
  );
};

export default SavedBooks;
