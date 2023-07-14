import React, { useContext } from "react";
import DataContext from "../../context/DataContext";
import "./NewBook.css";
import { Form, Formik } from "formik";
import InputField from "./InputField";
import * as Yup from "yup";

const NewBook = () => {
  let { handleSubmit, handleCancel } = useContext(DataContext);
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
          title: "",
          author: "",
          date: "",
          image: "",
          description: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {(formik) => (
          <>
            <h2>New Book</h2>
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
                  <InputField label="Image URL" name="image" type="url" />
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
                  Add Books
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    </main>
  );
};

export default NewBook;
