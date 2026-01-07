import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Plans from './pages/Plans';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Disclaimer from './pages/Disclaimer';

import HowItWorks from './pages/HowItWorks';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminPrivateRoute from './components/AdminPrivateRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="plans" element={<Plans />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="disclaimer" element={<Disclaimer />} />
      </Route>

      {/* Admin Routes (Separate from visitor Layout) */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={
        <AdminPrivateRoute>
          <AdminDashboard />
        </AdminPrivateRoute>
      } />
    </Routes>
  );
}
