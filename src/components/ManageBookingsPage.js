import React from 'react';
import './ManageBookingStyles.css';

const ManageBookingsPage = () => {
  // Placeholder data for bookings
  const bookings = [
    { id: 1, customerName: 'John Doe', tourName: 'Tour 1', date: '2024-05-15', status: 'Confirmed' },
    { id: 2, customerName: 'Jane Smith', tourName: 'Tour 2', date: '2024-05-18', status: 'Pending' },
    { id: 3, customerName: 'Alice Johnson', tourName: 'Tour 3', date: '2024-05-20', status: 'Cancelled' },
    // Add more bookings as needed
  ];

  return (
    <div className="manage-bookings-container">
      <h2 className="manage-bookings-title">Manage Bookings</h2>
      <button className="manage-bookings-button">Add New Booking</button>
      <table className="manage-bookings-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Tour Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.customerName}</td>
              <td>{booking.tourName}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
              <td className="manage-bookings-action-buttons">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookingsPage;
