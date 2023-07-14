import React, { useContext } from "react";
import HomeBook from "./HomeBook";
import DataContext from "../../context/DataContext";

const Feed = () => {
  let { searchResults } = useContext(DataContext);
  return (
    <>
      {searchResults.map((book) => (
        <HomeBook key={book.id} book={book} />
      ))}
    </>
  );
};

export default Feed;
