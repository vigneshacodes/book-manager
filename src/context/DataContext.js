import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  let [search, setSearch] = useState("");
  let [searchResults, setSearchResults] = useState("");
  let [savedBooks, setSavedBooks] = useState([]);

  // using through local storage

  let [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || [
      {
        id: 1,
        title: "Nanomedicine Emerging Prospects",
        author: "Subramanian Tamil Selvan",
        image: "https://image.ebooks.com/cover/210829289.jpg?width=332&height=500&quality=85",
        date: "2023-06-01",
        body: "TThis book highlights the emerging paradigm of nanomedicine, intersecting two burgeoning fields of nanotechnology and medicine. Numerous publications have appeared in the literature over the years, especially in cancer nanomedicine.",
        saved:false
      },
      {
        id: 2,
        title: "ChatGPT For Dummies",
       author: "Pam Baker",
        image: "https://image.ebooks.com/cover/210846834.jpg?width=332&height=500&quality=95",
       date: "2023-05-01",
        body: "ChatGPT For Dummies demystifies the artificial intelligence tool that can answer questions, write essays, and generate just about any kind of text it’s asked for. This powerful example of generative AI is widely predicted to upend education and business.",
        saved:false
      },
      {
        id: 3,
        title: "The Cambridge Handbook",
       author: "Jacob E. and Joel H.",
        image: "https://image.ebooks.com/cover/210595152.jpg?width=332&height=500&quality=85",
       date: "2023-06-15",
        body: "Data engineering has grown rapidly in the past decade, leaving many software engineers, data scientists, and analysts looking for a comprehensive view of this practice. With this practical book, you'll learn how to plan and build systems to serve the needs of your organization and customers by evaluating the best technologies available through the framework of the data engineering lifecycle."
        ,saved:false
      },
      {
        id: 4,
        title: "The Webs of Humankind",
       author: "J. R. McNeill",
        image: "https://image.ebooks.com/cover/210171579.jpg?width=332&height=500&quality=85",
       date: "2020-12-10",
        body: "A leader in the field presents a cohesive narrative of world history that effectively addresses the main challenge of the introductory survey: how to navigate beginning students through the vast detail of the subject. McNeill uses connective webs—along which trade, religious beliefs, technologies, pathogens, and much else traveled—to organize details and keep the big picture in view."
        ,saved:false
      },
      {
        id: 5,
        title: "Obsessed",
       author: "James Patterson",
        image: "https://image.ebooks.com/cover/210683011.jpg?width=332&height=500&quality=85",
       date: "2023-07-08",
        body: "Detective Michael Bennett must discover who's murdering glamorous young women - before his eldest daughter is targeted. Detective Michael Bennett and the NYPD are aboard a police boat in the Hudson River searching for a murder victim - a young college student."
        ,saved:false
      },
      {
        id: 6,
        title: "Critical Thinking Edition-4",
       author: "Richard Paul & Linda Elder",
        image: "https://image.ebooks.com/cover/210416748.jpg?width=332&height=500&quality=85",
       date: "2021-12-04",
        body: "Written by international authorities on critical thinking, this book details an integrated, universal concept of critical thinking that is both substantive and applicable to any and every situation in which human thinking is necessary."
        ,saved:false
      },
      {
        id: 7,
        title: "An Introduction to Behavior Analysis ",
       author: "Gregory J. Madden,  Derek D. Reed",
        image: "https://image.ebooks.com/cover/210223166.jpg?width=332&height=500&quality=85",
       date: "2021-02-05",
        body: "An Introduction to Behavior Analysis delivers an engaging and comprehensive introduction to the concepts and applications for graduate students of behavior analysis. Written from the ground up to capture and hold student interest, the book keeps its focus on practical issues."
        ,saved:false
      },
      {
        id: 8,
        title: "The Unhackable Internet",
       author: "Thomas P. Vartanian",
        image: "https://image.ebooks.com/cover/210688453.jpg?width=332&height=500&quality=85",
       date: "2023-02-11",
        body: "Like most aspects of modern existence, more and more of our financial lives have migrated to the digital realm. With the benefits of ease that our Internet allows us, that transition also raises numerous – and dangerous – threats to national security, our money, and the systems we use to store and transfer it."
        ,saved:false
      },
      {
        id: 9,
        title: "Javascript OOP",
       author: "Ved Antani ,  Gastón C. Hillar",
        image: "https://image.ebooks.com/cover/2691293.jpg?width=332&height=500&quality=85",
       date: "2016-08-14",
        body: "Learn popular Object-Oriented programming (OOP) principles and design patterns to build robust apps. Implement Object-Oriented concepts in a wide range of frontend architectures. Capture objects from real-world elements and create object-oriented code that represents them."
        ,saved:false
      },
      {
        id: 10,
        title: "Full-Stack React, TypeScript & Node",
       author: "David Choi",
        image: "https://image.ebooks.com/cover/210210578.jpg?width=332&height=500&quality=85",
       date: "2020-12-16",
        body: "React sets the standard for building high-performance client-side web apps. Node.js is a scalable application server that is used in thousands of websites, while GraphQL is becoming the standard way for large websites to provide data and services to their users."
        ,saved:false
      },
    ]
  );
  useEffect(() => {
    let filteredBooks = books.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );
    localStorage.setItem("books", JSON.stringify(filteredBooks));
    setSearchResults(filteredBooks.reverse());
  }, [books, search, setBooks]);
  useEffect(() => {
    let localStorageSavedBooks =
      JSON.parse(localStorage.getItem("savedBooks")) || [];
    setSavedBooks(localStorageSavedBooks);
  }, []);
  let navigate = useNavigate();
  /*---------------------------- */
  /*-------Adding new books----- */
  /*---------------------------- */
  let handleSubmit = (values) => {
    let id = books.length ? books[books.length - 1].id + 1 : 1;
    let newBook = {
      id,
      title: values.title,
      author: values.author,
      image: values.image,
      date: values.date,
      body: values.description,
    };
    let allBooks = [...books, newBook];
    setBooks(allBooks);
    navigate("/");
  };
  /*---------------------------- */
  /*-------canceling operation----- */
  /*---------------------------- */
  let handleCancel = () => {
    navigate("/");
  };
  /*---------------------------- */
  /*-------Deleting books----- */
  /*---------------------------- */
  let handleDelete = (id) => {
    if (window.confirm("Are you sure") === true) {
      let filteredBooks = books.filter((book) => book.id !== id);
      let filterSavedBooks = savedBooks.filter((book) => book.id !== id);
      localStorage.setItem("savedBooks", JSON.stringify(filterSavedBooks));
      setSavedBooks(filterSavedBooks);
      setBooks(filteredBooks);
      navigate("/");
    }
  };
  /*---------------------------- */
  /*-------Editing books------- */
  /*---------------------------- */
  let handleEdit = (values) => {
    let editedBook = {
      id: values.id,
      title: values.title,
      author: values.author,
      date: values.date,
      image: values.image,
      body: values.description,
    };
    let updatedBook = books.map((book) =>
      book.id === values.id ? { ...editedBook } : book
    );
    setBooks(updatedBook);
    navigate("/");
  };
  /*---------------------------- */
  /*-------saving books ------- */
  /*---------------------------- */
  let handleSave = (id) => {
    let savedBook = books.find((book) => book.id === id);
    savedBook.saved = true;
    let updatedBook = books.map((book) =>
      book.id === id ? { ...savedBook } : book
    );
    setBooks(updatedBook);
    let book;
    if (savedBooks.length === 0) {
      book = books.filter((book) => id === book.id);
      setSavedBooks(book);
    } else {
      let check = savedBooks.filter((book) => id === book.id);
      book = books.filter((book) => id === book.id);
      let allBooks = [...savedBooks, book[0]];
      localStorage.setItem("savedBooks", JSON.stringify(allBooks));
      if (!check.length) {
        setSavedBooks(allBooks);
      }
    }
  };
  /*---------------------------- */
  /*-----removing books from saved--- */
  /*---------------------------- */
  let handleRemove = (id) => {
    if (window.confirm("Are you sure") === true) {
      let removedBook = books.find((book) => book.id === id);
      removedBook.saved = false;
      let updatedBook = books.map((book) =>
        book.id === id ? { ...removedBook } : book
      );
      setBooks(updatedBook);
      let filteredBooks = savedBooks.filter((book) => id !== book.id);
      localStorage.setItem("savedBooks", JSON.stringify(filteredBooks));
      setSavedBooks(filteredBooks);
      navigate("/savedbooks");
    }
  };
  /*---------------------------- */
  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResults,
        handleSubmit,
        books,
        handleDelete,
        handleEdit,
        handleCancel,
        handleSave,
        handleRemove,
        savedBooks,
        setSavedBooks,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
