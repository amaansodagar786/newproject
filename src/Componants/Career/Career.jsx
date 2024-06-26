// src/components/CareerForm.jsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AiOutlinePaperClip } from 'react-icons/ai';
import './Career.scss';

const Career = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    position: Yup.string().required('Required'),
    message: Yup.string(),
    resume: Yup.mixed().required('Required'),
  });

  return (
    <div className="career-form">
      <h1>We're Hiring!</h1>
      <h2>Join Our Team</h2>
      <p>If you're interested in one of our open positions, start by applying here and attaching your resume.</p>
      <Formik
        initialValues={{ name: '', phone: '', email: '', position: '', message: '', resume: null }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone*</label>
              <Field type="text" id="phone" name="phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position Applied</label>
              <Field type="text" id="position" name="position" />
              <ErrorMessage name="position" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <Field as="textarea" id="message" name="message" />
            </div>
            <div className="form-group">
              <label htmlFor="resume">Attach Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={(event) => {
                  setFieldValue('resume', event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage name="resume" component="div" className="error" />
            </div>
            <button type="submit" className="submit-button">
              Submit Application
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Career;

