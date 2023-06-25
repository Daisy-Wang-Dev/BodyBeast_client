import "./Profile.scss";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Profile = () => {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    dateOfBirth: "",
    mode: "",
  };
  //   TODO: validation schema
  return (
    <section className="setting__profile">
      <Formik initialValues={initialValues}>
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
            <Field className="setting__input" component="select" id="mode" name="mode" >
              <option value="">Select Mode</option>
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
          <button type="submit">Update Profile</button>
          <button type="button">Delete Account</button>
        </Form>
      </Formik>
    </section>
  );
};

export default Profile;
