import Home from "./components/Home/Home";
import SavedBooks from "./components/SavedBooks/SavedBooks";
import ViewBook from "./components/SavedBooks/ViewBook";
import Footer from "./components/Footer";
import Missing from "./components/Missing";
import NewBook from "./components/NewBooks/NewBook";
import Book from "./components/EditBook/Book";
import EditBook from "./components/EditBook/EditBook";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header title="Vs" hub=" Books " />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="book">
            <Route index element={<NewBook />} />
            <Route path=":id" element={<Book />} />
          </Route>
          <Route path="/edit/:id" element={<EditBook />} />
          <Route path="savedbooks" element={<SavedBooks />} />
          <Route path="savedbooks/book/:id" element={<ViewBook />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
