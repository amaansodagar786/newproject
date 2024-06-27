import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Contact.scss';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    service: Yup.string().required('Required'),
    message: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoad(true)
      const response = await fetch('http://localhost:3035/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        resetForm();
        setLoad(false)
      } else {
        setSnackbarMessage('Failed to send message. Please try again.');
        setSnackbarSeverity('error');
        setLoad(false)
      }
    } catch (error) {
      setSnackbarMessage('An error occurred. Please try again.');
      setSnackbarSeverity('error');
      console.error('Error:', error);
      setLoad(false)
    } finally {
      setOpen(true);
      setLoad(false)
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <h2>Drop us a line!</h2>
        <Formik
          initialValues={{ name: '', email: '', service: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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
            {
              load ? (
                <button type="submit" className="submit-button" disabled>
                  Sending...
                </button>
              ) : (
                <button type="submit" className="submit-button">
                  Send
                </button>
              )
            }


          </Form>
        </Formik>
      </div>
      <div className="contact-info">
        <h2>Better yet, see us in person!</h2>
        <p>We love our customers, so feel free to visit during normal business hours.</p>
        <address>
          <strong>Noah Workforce Development System</strong>

          <p> <b><FaLocationDot /> :  </b>  Vasna, Vadodara, Gujarat, India </p>
          <p> <b><IoIosCall /> : </b> +91-9510287060 </p>
          <p> <b><MdEmail /> : </b> info@noahwds.com </p>

        </address>
        <h3>Work Hours</h3>
        <p className='timings'>
          Mon 10:00 am - 07:00 pm<br />
          Tue 10:00 am - 07:00 pm<br />
          Wed 10:00 am - 07:00 pm<br />
          Thu 10:00 am - 07:00 pm<br />
          Fri 10:00 am - 07:00 pm<br />
          Sat 10:00 am - 07:00 pm<br />
          Sun Closed
        </p>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
