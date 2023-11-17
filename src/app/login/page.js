"use client";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addlogin, setEmail, setPassword } from '@/redux/features/loginslice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Page() {
  const { email, password } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const clearForm = () => {
    setFormData({
      email: '',
      password: '',
    });
    setErrorMessages({});
  };

  const validateField = (fieldName, value) => {
    let errors = { ...errorMessages };

    if (fieldName === 'email') {
      if (!value || !/^\S+@\S+\.\S+$/.test(value)) {
        errors.email = 'Valid email address is required';
      } else {
        delete errors.email;
      }
    }

    if (fieldName === 'password') {
      if (!value) {
        errors.password = 'Password is required';
      } else {
        delete errors.password;
      }
    }

    setErrorMessages(errors);
  };

  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
    validateField(fieldName, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = ['email', 'password'];
    const isAllFieldsFilled = requiredFields.every((field) => formData[field]);

    if (!isAllFieldsFilled) {
      // Show an alert message indicating that all fields are required.
      alert('Please fill in all required fields');
      return; // Do not proceed with form submission.
    }

    // The rest of your form submission logic for valid data.
    const isFormValid = Object.keys(errorMessages).length === 0;

    if (isFormValid) {
      setIsLoading(false);

      const data = {
        email: formData.email,
        password: formData.password,
      };

      // try {
      //   await dispatch(addlogin(data));
      //   toast.success('Login Done'); // You can use toast for success message.
      //   clearForm();
      // } catch (error) {
      //   toast.error('Data could not be added'); // Use toast for error message.
      // } finally {
      //   setIsLoading(false);
      // }

      // try {
      //  dispatch(addlogin(data));

      //   if (response.token) {
      //     localStorage.setItem('token', response.token);
      //     console.log(response.token);

      //     toast.success('Login Done');
      //     clearForm();
      //   } else {
      //     toast.error('Token not found in the response');
      //   }
      // } catch (error) {
      //   toast.error('Data could not be added');
      // } finally {
      //   setIsLoading(false);
      // }

       dispatch(addlogin(data));
    }
  };

  return (
    <div>
      <section className="bgsection mt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body" style={{ border: "none" }}>
                  {/* <img src="../assets/img/logo2.png" className="img-fluid rounded-top mb-2" alt="" /><br/> */}
                  <h1 className='text-center mt-5'>PicFeed</h1>
                  <div className="card justify-content-center align-items-center" style={{ border: "none" }}>
                    <div className="card-body login" style={{ border: "none" }}>
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-google"></a>
                      <a href="#" className="fa fa-youtube"></a>
                      <a href="#" className="fa fa-instagram"></a>
                    </div>
                  </div>
                  <div className="px-4">
                    <input
                      type="text"
                      className={`form-control ${errorMessages.email ? 'is-invalid' : ''}`}
                      name="email"
                      id=""
                      aria-describedby="helpId"
                      placeholder="Enter username or email"
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                    />
                    {errorMessages.email && <div className="invalid-feedback">{errorMessages.email}</div>}

                    <input
                      type="password"
                      className={`form-control mt-2 mb-2 ${errorMessages.password ? 'is-invalid' : ''}`}
                      name="password"
                      id=""
                      aria-describedby="helpId"
                      placeholder="Enter password"
                      onChange={(e) => handleFieldChange('password', e.target.value)}
                    />
                    {errorMessages.password && <div className="invalid-feedback">{errorMessages.password}</div>}
                    <span  style={{ fontSize: "15px" }}><a href="/register">Need an account?</a></span>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className={`btn btn-primary btn-sm float-right ${isLoading ? 'disabled' : ''}`}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Loading...' : 'Sign In'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
