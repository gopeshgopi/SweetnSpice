import React, { useState } from 'react';
import styles from '../styles/Login.module.css'; // Import CSS file for styling
import axios from 'axios';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { firstName, email, lastName, password, mobileNumber, role };

    try {
      const response = await axios.post("http://localhost:8080/api/v1/signup", formData);

      if (response.data === 'User Added Sucessfully') {
        alert('Signup successful. Please login now.');
      } else if (response.data === 'User Already exists') {
        alert('User already exists. Please use login to proceed.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.inputField}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.inputField}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <select
            className={styles.inputField}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <button type="submit" className={styles.loginButton}>SignUp</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
