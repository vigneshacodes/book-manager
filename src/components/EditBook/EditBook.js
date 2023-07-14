import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";
import "./EditBook.css";
import { Form, Formik } from "formik";
import InputField from "../NewBooks/InputField";
import * as Yup from "yup";

const EditBook = () => {
  let { handleEdit, handleCancel, books } = useContext(DataContext);
  let { id } = useParams();
  let book = books.find((book) => book.id.toString() === id);
  const validate = Yup.object({
    title: Yup.string()
      .min(5, "Must contain 5 character or more")
      .required("Required!"),
    author: Yup.string()
      .min(5, "Must contain 5 character or more")
      .required("Required!"),
    date: Yup.string().required("required!"),
    image: Yup.string().url("Invalid URL").required("Required!"),
    description: Yup.string()
      .min(15, "Must contain 15 character or more")
      .required("Required!"),
  });
  return (
    <main className="NewBook">
      <Formik
        initialValues={{
          id: book.id,
          title: book.title,
          author: book.author,
          date: book.date,
          image: book.image,
          description: book.body,
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          handleEdit(values);
        }}
      >
        {(formik) => (
          <>
            <h2>Edit Book Details</h2>
            <Form className="newBookForm">
              <div className="form-group">
                <div className="row">
                  <InputField label="Title" name="title" type="text" />
                </div>
                <div className="row">
                  <InputField label="Author" name="author" type="text" />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <InputField label="Date" name="date" type="date" />
                </div>
                <div className="row">
                  <InputField label="Image" name="image" type="url" />
                </div>
              </div>
              <div className="description">
                <InputField
                  label="Description"
                  name="description"
                  type="textarea"
                />
              </div>
              <div className="btn-group">
                <button type="button" onClick={handleCancel} className="cancel">
                  Cancel
                </button>
                <button type="submit" className="add">
                  Update
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </main>
  );
};

export default EditBook;
