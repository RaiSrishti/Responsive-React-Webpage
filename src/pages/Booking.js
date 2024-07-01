
import React from 'react';

function Booking() {
  return (
    <div>
      <form>
      <h2>Book a Table</h2>
        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="time" required />
        </div>
        <div>
          <label>Number of People:</label>
          <input type="number" name="people" required />
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default Booking;
