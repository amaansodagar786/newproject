// src/components/ContactForm.jsx

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.scss';

const Contact = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    service: Yup.string().required('Required'),
    message: Yup.string(),
  });

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <h2>Drop us a line!</h2>
        <Formik
          initialValues={{ name: '', email: '', service: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className="form-group">
              <Field type="text" id="name" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="form-group">
              <Field type="email" id="email" name="email" placeholder="Email*" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <Field type="text" id="service" name="service" placeholder="Inquiry for Which Service*" />
              <ErrorMessage name="service" component="div" className="error" />
            </div>
            <div className="form-group">
              <Field as="textarea" id="message" name="message" placeholder="Message" />
            </div>
            <button type="submit" className="submit-button">
              Send
            </button>
          </Form>
        </Formik>
      </div>
      <div className="contact-info">
        <h2>Better yet, see us in person!</h2>
        <p>We love our customers, so feel free to visit during normal business hours.</p>
        <address>
          <strong>Noah Workforce Development System</strong><br />
          Vasna, Vadodara, Gujarat, India<br />
          <strong>Contact No:</strong> +91-9510287060<br />
          <strong>Email:</strong> info@noahwds.com
        </address>
        <h3>Hours</h3>
        <p>
          Mon 10:00 am - 07:00 pm<br />
          Tue 10:00 am - 07:00 pm<br />
          Wed 10:00 am - 07:00 pm<br />
          Thu 10:00 am - 07:00 pm<br />
          Fri 10:00 am - 07:00 pm<br />
          Sat 10:00 am - 07:00 pm<br />
          Sun Closed
        </p>
      </div>
    </div>
  );
};

export default Contact;
