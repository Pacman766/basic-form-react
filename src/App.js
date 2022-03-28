import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [submitted, setSubmited] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInput = (e) => {
    setValue({ ...value, firstName: e.target.value });
  };
  const handleLastNameInput = (e) => {
    setValue({ ...value, lastName: e.target.value });
  };
  const handleEmailInput = (e) => {
    setValue({ ...value, email: e.target.value });
  };

  const handleSuccessMsgShow = (e) => {
    e.preventDefault();
    if (value.firstName && value.lastName && value.email) {
      setValid(true);
    }
    setSubmited(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSuccessMsgShow}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : (
          false
        )}
        <input
          onChange={handleFirstNameInput}
          value={value.firstName}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !value.firstName ? (
          <span id="first-name-error">Please enter a first name</span>
        ) : null}
        <input
          onChange={handleLastNameInput}
          value={value.lastName}
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !value.lastName ? (
          <span id="last-name-error">Please enter a last name</span>
        ) : null}
        <input
          onChange={handleEmailInput}
          value={value.email}
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !value.email ? (
          <span id="email-error">Please enter an email address</span>
        ) : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
