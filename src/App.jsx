import React, { useState } from 'react';
import './index.css'; // Import CSS file

function BookingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to handle form submission, like sending data to a backend server
    console.log('Form submitted:', { name, phone, guests, date, time });
    // Reset form fields
    setName('');
    setPhone('');
    setGuests(1);
    setDate('');
    setTime('');
  };

  return (
    <div className="booking-container">
      <h2 className="heading">Little Lemon Restaurant - Table Booking</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name:</label>
          <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label className="label">Phone:</label>
          <input className="input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <label className="label">Number of Guests:</label>
          <input className="input" type="number" value={guests} min="1" onChange={(e) => setGuests(parseInt(e.target.value))} required />
        </div>
        <div className="form-group">
          <label className="label">Date:</label>
          <input className="input" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label className="label">Time:</label>
          <input className="input" type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </div>
        <button className="submit-btn" type="submit">Book Table</button>
      </form>
    </div>
  );
}

export default BookingForm;
