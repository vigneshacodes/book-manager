import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="Missing">
      <h2>Book not found</h2>
      <Link to="/">
        <p>Kindly Visit our Homepage to Explore.</p>
      </Link>
    </main>
  );
};

export default Missing;
