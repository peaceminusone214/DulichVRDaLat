import React from 'react';
import { Link } from 'react-router-dom';
import './AdminPageStyles.css';
import { useAuth } from './Login/AuthContext';

const AdminPage = () => {
  const { logout } = useAuth();

  return (
    <div className="admin-page">
      <header className="header">
        <div className="logo">
          <h1>Tourism Dashboard</h1>
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li><Link to="/tours">Tours</Link></li>
            <li><Link to="/bookings">Bookings</Link></li>
            <li><button onClick={logout} className="logout-button">Logout</button></li> {/* Logout button */}
          </ul>
        </nav>
      </header>

      <div className="content-container">
        <aside className="sidebar">
          <h2>Menu</h2>
          <ul className="sidebar-links">
            <li><Link to="/tours">Manage Tours</Link></li>
            <li><Link to="/bookings">Manage Bookings</Link></li>
          </ul>
        </aside>

        <main className="main-content">
          <h2>Welcome to the Admin Dashboard</h2>
          <p>Here you can manage tours, bookings, and more.</p>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
