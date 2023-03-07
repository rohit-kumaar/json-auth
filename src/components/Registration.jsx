import React from "react";
import { newUser } from "../services/userServices";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Registration() {
  const navigate = useNavigate();

  const postData = (values) => {
    newUser(values).then((res) => {
      alert("Registration successfully done");
      navigate("/");
    });
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "Must be 5 characters or greater")
      .required("Please enter a full name"),
    email: Yup.string().required("Please enter an email id"),
    password: Yup.string().required("Please enter a password"),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => postData(values)}
      >
        <Form className="mt-5 ">
          <div className="container">
            <h1 className="text-center mb-4">Registration</h1>

            <div className="row">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Full Name</b>
                </label>
                <Field type="text" className="form-control" name="name" />
                <div className="text-danger">
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <b>Email ID</b>
                </label>
                <Field type="email" className="form-control" name="email" />
                <div className="text-danger">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <Field
                  type="password"
                  className="form-control"
                  name="password"
                />
                <div className="text-danger">
                  <ErrorMessage name="password" />
                </div>
              </div>
            </div>

            <div className="d-flex align-content-center gap-3 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              <Link to="/" className="align-self-end">
                Already Register
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Registration;
