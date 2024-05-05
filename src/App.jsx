import React, { useState } from 'react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="App">
      <header>
        <h1>Little Lemon Restaurant</h1>
      </header>
      <main>
        <form id="booking-form" onSubmit={handleSubmit}>
          <h2>Book a Table</h2>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="guests">Number of Guests:</label>
            <input type="number" id="guests" name="guests" min="1" value={formData.guests} onChange={handleChange} required />
          </div>
          <button type="submit">Book Now</button>
        </form>
      </main>
      <footer>
        <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
