// ManageToursPage.js

import React from 'react';
import './ManageTourStyles.css';

const ManageToursPage = () => {
  // Placeholder data for tours
  const tours = [
    { id: 1, name: 'Tour 1', location: 'Location 1', duration: '2 days' },
    { id: 2, name: 'Tour 2', location: 'Location 2', duration: '3 days' },
    { id: 3, name: 'Tour 3', location: 'Location 3', duration: '4 days' },
    // Add more tours as needed
  ];

  return (
    <div className="manage-tours-container">
      <div className="manage-tours-header">
        <h2 className="manage-tours-title">Manage Tours</h2>
        <button className="manage-tours-button">Add New Tour</button>
      </div>
      <table className="manage-tours-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tours.map(tour => (
            <tr key={tour.id}>
              <td>{tour.id}</td>
              <td>{tour.name}</td>
              <td>{tour.location}</td>
              <td>{tour.duration}</td>
              <td className="manage-tours-action-buttons">
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

export default ManageToursPage;
