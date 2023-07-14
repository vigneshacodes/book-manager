import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { FaSave } from "react-icons/fa";

const HomeBook = ({ book }) => {
  let { handleSave } = useContext(DataContext);
  return (
    <article className="book">
      <Link to={`book/${book.id}`} className="card">
        <img src={book.image} alt="..." className="image" />
        <h2>{book.title}</h2>
        <p className="author">By - {book.author}</p>
        <p className="date">Published on :{book.date}</p>
      </Link>
      <button
        className={book.saved ? "btnSave disabled" : "btnSave"}
        onClick={() => handleSave(book.id)}
      >
        {book.saved ? "Saved" : <FaSave />}
      </button>
    </article>
  );
};

export default HomeBook;
