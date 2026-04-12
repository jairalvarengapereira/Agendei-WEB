import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import Appointments from "./pages/appointments/appointments.jsx";
import AppointmentAdd from "./pages/appointment-add/appointment-add.jsx";
import Doctors from "./pages/doctors/doctors.jsx";
import DoctorsAdd from "./pages/doctors-add/doctors-add.jsx";
import Users from "./pages/users/users.jsx";
import UsersAdd from "./pages/users-add/users-add.jsx";
import Profile from "./pages/profile/profile.jsx";
import Services from "./pages/services/services.jsx";
import ServicesAdd from "./pages/services-add/services-add.jsx";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('sessionToken');
  if (!token) {
    window.location.href = "/";
    return null;
  }
  return children;
}

function Rotas() {
  return (
    <BrowserRouter>
      {/* URIs */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Rotas protegidas */}
        <Route path="/profile" element={
          <ProtectedRoute><Profile /></ProtectedRoute>
        } />
        <Route path="/appointments" element={
          <ProtectedRoute><Appointments /></ProtectedRoute>
        } />
        <Route path="/appointments/add" element={
          <ProtectedRoute><AppointmentAdd /></ProtectedRoute>
        } />
        <Route path="/appointments/edit/:id_appointment" element={
          <ProtectedRoute><AppointmentAdd /></ProtectedRoute>
        } />
        <Route path="/doctors" element={
          <ProtectedRoute><Doctors /></ProtectedRoute>
        } />
        <Route path="/doctors/add" element={
          <ProtectedRoute><DoctorsAdd /></ProtectedRoute>
        } />
        <Route path="/doctors/edit/:id_doctor" element={
          <ProtectedRoute><DoctorsAdd /></ProtectedRoute>
        } />
        <Route path="/users/" element={
          <ProtectedRoute><Users /></ProtectedRoute>
        } />
        <Route path="/users/add" element={
          <ProtectedRoute><UsersAdd /></ProtectedRoute>
        } />
        <Route path="/users/edit/:id_user" element={
          <ProtectedRoute><UsersAdd /></ProtectedRoute>
        } />
        <Route path="/services" element={
          <ProtectedRoute><Services /></ProtectedRoute>
        } />
        <Route path="/services/add" element={
          <ProtectedRoute><ServicesAdd /></ProtectedRoute>
        } />
        <Route path="/services/edit/:id_service" element={
          <ProtectedRoute><ServicesAdd /></ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
