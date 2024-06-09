import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Admin from "./routes/Admin";
import ManageToursPage from "./components/ManageToursPage";
import ManageBookingsPage from "./components/ManageBookingsPage";
import QuestsPage from "./components/QuestsPage";
import Login from "./routes/Login";
import { AuthProvider } from "./components/Login/AuthContext";
import PrivateRoute from "./components/Login/PrivateRoute";

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Root path */}
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/consultant" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<PrivateRoute element={<Admin />} />} />
          <Route path="/tours" element={<PrivateRoute element={<ManageToursPage />} />} />
          <Route path="/bookings" element={<PrivateRoute element={<ManageBookingsPage />} />} />
          <Route path="/quests" element={<PrivateRoute element={<QuestsPage />} />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
