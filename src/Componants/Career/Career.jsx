import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Career.scss';

const CareerForm = () => {
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
      <p className='apply'>Apply Now</p>
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
              <Field name="name">
                {({ field }) => (
                  <div className="input-container">
                    <input type="text" {...field} placeholder="Name*" />
                    <ErrorMessage name="name" component="div" className="error" />
                  </div>
                )}
              </Field>
            </div>
            <div className="form-group">
              <Field name="phone">
                {({ field }) => (
                  <div className="input-container">
                    <input type="text" {...field} placeholder="Phone*" />
                    <ErrorMessage name="phone" component="div" className="error" />
                  </div>
                )}
              </Field>
            </div>
            <div className="form-group">
              <Field name="email">
                {({ field }) => (
                  <div className="input-container">
                    <input type="email" {...field} placeholder="Email*" />
                    <ErrorMessage name="email" component="div" className="error" />
                  </div>
                )}
              </Field>
            </div>
            <div className="form-group">
              <Field name="position">
                {({ field }) => (
                  <div className="input-container">
                    <input type="text" {...field} placeholder="Position Applied" />
                    <ErrorMessage name="position" component="div" className="error" />
                  </div>
                )}
              </Field>
            </div>
            <div className="form-group">
              <Field name="message">
                {({ field }) => (
                  <div className="input-container">
                    <textarea {...field} placeholder="Message"></textarea>
                  </div>
                )}
              </Field>
            </div>
            <div className="form-group">
              <div className="input-container">
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

export default CareerForm;
