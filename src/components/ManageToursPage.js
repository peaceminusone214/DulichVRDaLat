// ManageToursPage.js

import React, { useState, useEffect } from 'react';
import './ManageTourStyles.css'; // Import CSS file

const ManageToursPage = () => {
  const apiUrl = 'http://localhost:5000'; // Replace with your backend URL
  const [tours, setTours] = useState([]);
  const [tourFormData, setTourFormData] = useState({
    name: '',
    locations: '',
    duration: ''
  });

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const response = await fetch(`${apiUrl}/tours`);
      if (!response.ok) {
        throw new Error('Failed to fetch tours');
      }
      const fetchedTours = await response.json();
      setTours(fetchedTours);
    } catch (error) {
      console.error('Error fetching tours:', error);
      alert('Failed to fetch tours. Please refresh the page.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTourFormData({ ...tourFormData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/tours`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tourFormData)
      });

      if (!response.ok) {
        throw new Error('Failed to create tour');
      }

      const createdTour = await response.json();
      setTours([...tours, createdTour]);
      setTourFormData({
        name: '',
        locations: '',
        duration: ''
      });
    } catch (error) {
      console.error('Error creating tour:', error);
      alert('Failed to create tour. Please try again.');
    }
  };

  const handleDeleteTour = async (tourId) => {
    try {
      const response = await fetch(`${apiUrl}/tours/${tourId}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete tour');
      }

      setTours(tours.filter(tour => tour._id !== tourId));
    } catch (error) {
      console.error('Error deleting tour:', error);
      alert('Failed to delete tour. Please try again.');
    }
  };

  return (
    <div className="manage-tours-container">
      <div className="manage-tours-header">
        <h1 className="manage-tours-title">Tour Management</h1>
        <button className="manage-tours-button" onClick={fetchTours}>Refresh Tours</button>
      </div>

      <form className="manage-tours-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          value={tourFormData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="locations"
          value={tourFormData.locations}
          onChange={handleInputChange}
          placeholder="Locations (comma separated)"
          required
        />
        <input
          type="number"
          name="duration"
          value={tourFormData.duration}
          onChange={handleInputChange}
          placeholder="Duration (days)"
          required
        />
        <button type="submit" className="manage-tours-submit-button">Create Tour</button>
      </form>

      <table className="manage-tours-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Locations</th>
            <th>Duration (days)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.map(tour => (
            <tr key={tour._id}>
              <td>{tour.name}</td>
              <td>{tour.locations.join(', ')}</td>
              <td>{tour.duration}</td>
              <td className="manage-tours-action-buttons">
                <button onClick={() => handleDeleteTour(tour._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageToursPage;
