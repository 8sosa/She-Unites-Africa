import React, { useState } from 'react';

const AdminAuth = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const result = await response.json();
      if (response.ok) {
        setMessage(`Login successful! Token: ${result.token}`);
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });
      const result = await response.json();
      if (response.ok) {
        setMessage('Admin registered successfully!');
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage('Server error. Please try again later.');
    }
  };

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'login') {
      setLoginData({ ...loginData, [name]: value });
    } else if (type === 'register') {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Admin Authentication</h1>
      {message && <p style={{ color: 'red' }}>{message}</p>}

      <form onSubmit={handleLogin} style={{ marginBottom: '20px' }}>
        <h2>Login</h2>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={loginData.username}
          onChange={(e) => handleInputChange(e, 'login')}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={(e) => handleInputChange(e, 'login')}
        />
        <button type="submit">Login</button>
      </form>

      <form onSubmit={handleRegister}>
        <h2>Register</h2>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={registerData.username}
          onChange={(e) => handleInputChange(e, 'register')}
        />
        <label>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={registerData.firstname}
          onChange={(e) => handleInputChange(e, 'register')}
        />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={registerData.lastname}
          onChange={(e) => handleInputChange(e, 'register')}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={registerData.email}
          onChange={(e) => handleInputChange(e, 'register')}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={registerData.password}
          onChange={(e) => handleInputChange(e, 'register')}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminAuth;
