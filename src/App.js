import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleFirstNameInput = (e) => {
    setValue({ ...value, firstName: e.target.value });
  };
  const handleLastNameInput = (e) => {
    setValue({ ...value, lastName: e.target.value });
  };
  const handleEmailInput = (e) => {
    setValue({ ...value, email: e.target.value });
  };

  return (
    <div class="form-container">
      <form class="register-form">
        {/* Uncomment the next line to show the success message */}
        {/* <div class="success-message">Success! Thank you for registering</div> */}
        <input
          onChange={handleFirstNameInput}
          value={value.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="first-name-error">Please enter a first name</span> */}
        <input
          onChange={handleLastNameInput}
          value={value.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleEmailInput}
          value={value.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
