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

  const getUserInfo = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_API_URL+"/user/1")
        console.log(response.data);
        const {name, user_name, email,date_of_birth,mode} = response.data;
        setUserInfo(response.data)
        setName(name);
        setUsername(user_name);
        setEmail(email);
        setDateOfBirth(date_of_birth);
        setMode(mode);
    } catch (err) {
        console.log(`Error: ${err.message}`);
    }
  };

  useEffect(()=>{
    getUserInfo();
  },[]);

  if(!userInfo){
    return;
  }

  const initialValues = {
    name:name,
    username: username ,
    email: email,
    dateOfBirth: dateOfBirth,
    mode: mode.toLocaleLowerCase(),
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    dateOfBirth: Yup.string()
      .required("Date of Birth is required")
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        "Date of Birth must be in the format yyyy-mm-dd"
      ),
    mode: Yup.string()
      .oneOf(["maintaining", "bulking", "cutting"])
      .required("Mode is required"),
    mode: Yup.string()
      .oneOf(["maintaining", "bulking", "cutting"])
      .required("Mode is required"),
  });
  return (
    <section className="setting__profile">
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
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
            <label htmlFor="username">Username</label>
            <Field
              className="setting__input"
              type="text"
              id="username"
              name="username"
            />
            <ErrorMessage
              className="setting__error"
              name="username"
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
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <Field
              className="setting__input"
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
            />
            <ErrorMessage
              className="setting__error"
              name="dateOfBirth"
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
        </Form>
      </Formik>
    </section>
  );
};

export default Profile;
