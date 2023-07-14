import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "../../context/DataContext";
import "./Home.css";

const Home = () => {
  let { searchResults } = useContext(DataContext);
  return (
    <main className="Home">
      {searchResults.length ? (
        <Feed />
      ) : (
        <p style={{ marginTop: "2rem" }}>No Books to display.</p>
      )}
    </main>
  );
};

export default Home;
