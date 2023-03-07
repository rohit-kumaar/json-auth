import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();

  const postData = (values) => {
    console.log(values.email, values.password);

    if (true) {
      ///implentation
      // console.log('proceed');
      fetch(
        "http://localhost:4000/users?" +
          `email=${values.email}&password=${values.password}`
      )
        .then((res) => {
          navigate("/profile");
          // console.log("Rohit", res);
          // return res.json();
        })
        // .then((resp) => {
        //   console.log("Rohit", resp);
        //   if (Object.keys(resp).length === 0) {
        //     alert("Please Enter valid username");
        //   } else {
        //     if (resp.password === values.password) {
        //       alert("Success");
        //       // sessionStorage.setItem("username", username);
        //       // sessionStorage.setItem("userrole", resp.role);
        //       navigate("/profile");
        //     } else {
        //       alert("Please Enter valid credentials");
        //     }
        //   }
        // })
        .catch((err) => {
          alert("Login Failed due to :" + err.message);
        });
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .min(5, "Must be include @")
      .required("Please enter a correct email id."),
    password: Yup.string().required("Please enter a correct password."),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => postData(values)}
      >
        <Form className="mt-5">
          <div className="container">
            <h1 className="text-center">Login</h1>

            <div className="row">
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
                Login
              </button>

              <Link to="/" className="align-self-end">
                New Registration
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
