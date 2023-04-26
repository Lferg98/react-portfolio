import React, { useState } from 'react';

import '../styles/Contact.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);

    
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const isValidEmail = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <div className="form-group">
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={errors.name ? 'form-control is-invalid' : 'form-control'}
        />
        {errors.name && (
          <div className="invalid-feedback">{errors.name}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className={errors.email ? 'form-control is-invalid' : 'form-control'}
        />
        {errors.email && (
          <div className="invalid-feedback">{errors.email}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="message">Message*</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleInputChange}
          className={errors.message ? 'form-control is-invalid' : 'form-control'}
        ></textarea>
        {errors.message && (
          <div className="invalid-feedback">{errors.message}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ContactForm;
