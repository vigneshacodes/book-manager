import { ErrorMessage, useField } from "formik";
import React from "react";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {(props.type === "text" ||
        props.type === "url" ||
        props.type === "date") && (
        <>
          <div className="row">
            <label htmlFor={label}>{label}:</label>
            <input
              type={field.type}
              placeholder={label}
              className={`${meta.touched && meta.error && "invalid"} `}
              {...field}
              {...props}
              id={label}
              autoComplete="off"
              required
            />
            <p>
              <ErrorMessage name={field.name} />
            </p>
          </div>
        </>
      )}
      {props.type === "textarea" && (
        <>
          <label htmlFor={label}>{label} :</label>
          <textarea
            placeholder={label}
            className={`${meta.touched && meta.error && "invalid"} `}
            {...field}
            {...props}
            required
            id={label}
            autoComplete="off"
          />
          <p>
            <ErrorMessage name={field.name} />
          </p>
        </>
      )}
    </>
  );
};

export default InputField;
