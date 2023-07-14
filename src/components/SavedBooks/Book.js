import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <article className="book">
      <Link to={`book/${book.id}`} className="card">
        <img src={book.image} alt="..." className="image" />
        <h2>{book.title}</h2>
        <p className="author">By - {book.author}</p>
        <p className="date">Published on :{book.date}</p>
      </Link>
    </article>
  );
};

export default Book;
