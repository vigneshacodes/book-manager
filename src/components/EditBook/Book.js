import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";
import "./EditBook.css";

const Book = () => {
  let { books, handleDelete } = useContext(DataContext);
  let { id } = useParams();
  // let book = searchResults.find((book) => book.id.toString() === id.toString());
  let book = books.filter((book) => book.id.toString() === id.toString())[0];
  return (
    <main className="BookPage">
      <article className="book">
        {book && (
          <>
            <div className="left">
              <img src={book.image} alt="..." />
            </div>
            <div className="right">
              <h2>{book.title}</h2>
              <p className="author">By {book.author}</p>
              <p className="date">Published on :-{book.date}</p>
              <p className="description">Description :- {book.body} </p>
              <div className="btn-group">
                <Link to="/">
                  <button className="backBtn">Back</button>
                </Link>
                <Link to={`/edit/${book.id}`}>
                  <button className="editButton">Edit Book Details</button>
                </Link>
                <button
                  className="deleteButton"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete Book
                </button>
              </div>
            </div>
          </>
        )}
        {!book && (
          <>
            <h2>Post not found</h2>
            <Link to="/">
              <p>Kindly Visit Our Homepage and Explore</p>
            </Link>
          </>
        )}
      </article>
    </main>
  );
};

export default Book;
