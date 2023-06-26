import "./Profile.scss";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mode, setMode] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/user/1"
      );
      const { name, user_name, email, date_of_birth, mode } = response.data;
      setUserInfo(response.data);
      setName(name);
      setUsername(user_name);
      setEmail(email);
      setDateOfBirth(date_of_birth);
      setMode(mode);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!userInfo) {
    return <h1 className="loading">DATA LOADING...</h1>;
  }

  const initialValues = {
    name: name,
    user_name: username,
    email: email,
    date_of_birth: dateOfBirth,
    mode: mode.toLocaleLowerCase(),
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    user_name: Yup.string().required("username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    date_of_birth: Yup.string()
      .required("Date of Birth is required")
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        "Date of Birth must be in the format yyyy-mm-dd"
      ),
    mode: Yup.string()
      .oneOf(["maintaining", "bulking", "cutting"])
      .required("Mode is required"),
  });

  const handleSubmit = async (values) => {
    try {
      
      await axios.put(process.env.REACT_APP_API_URL + "/user/1", values);
      setIsSubmitted(true);
      
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };


  return (
    <section className="setting__profile">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form className="setting__profile-form">
          <div className="setting__container">
            <label htmlFor="name">Name</label>
            <Field
              className="setting__input"
              type="text"
              id="name"
              name="name"
            />
            <ErrorMessage
              className="setting__error"
              name="name"
              component="div"
            ></ErrorMessage>
          </div>

          <div className="setting__container">
            <label htmlFor="user_name">Username</label>
            <Field
              className="setting__input"
              type="text"
              id="user_name"
              name="user_name"
            />
            <ErrorMessage
              className="setting__error"
              name="user_name"
              component="div"
            ></ErrorMessage>
          </div>

          <div className="setting__container">
            <label htmlFor="email">Email</label>
            <Field
              className="setting__input"
              type="email"
              id="email"
              name="email"
            />
            <ErrorMessage
              className="setting__error"
              name="email"
              component="div"
            ></ErrorMessage>
          </div>

          <div className="setting__container">
            <label htmlFor="date_of_birth">Date of Birth</label>
            <Field
              className="setting__input"
              type="text"
              id="date_of_birth"
              name="date_of_birth"
            />
            <ErrorMessage
              className="setting__error"
              name="date_of_birth"
              component="div"
            ></ErrorMessage>
          </div>

          <div className="setting__container">
            <label htmlFor="mode">Mode</label>
            <Field
              className="setting__input setting__input--select"
              component="select"
              type="text"
              id="mode"
              name="mode"
            >
              <option value="maintaining">Maintaining</option>
              <option value="bulking">Bulking</option>
              <option value="cutting">Cutting</option>
            </Field>
            <ErrorMessage
              className="setting__error"
              name="mode"
              component="div"
            ></ErrorMessage>
          </div>
          <div className="setting__btns">
            <button className="setting__btn setting__btn--update" type="submit">
              Update Profile
            </button>
            <button className="setting__btn setting__btn--delete" type="button">
              Delete Account
            </button>
          </div>
          {isSubmitted && (
            <h3 className="setting__message">Profile Updated Successfully!</h3>
          )}
        </Form>
      </Formik>
    </section>
  );
};

export default Profile;
