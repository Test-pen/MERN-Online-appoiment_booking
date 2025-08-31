// eslint-disable-next-line no-unused-vars
import React from 'react';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route , Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorList from './pages/Admin/Doctorlist';
import { DoctorContext } from './context/DoctorContext.jsx';
import DoctorDashboard from './pages/Doctor/DoctorDashboard.jsx';
import DoctorAppointments from './pages/Doctor/DoctorAppointments.jsx';


const App = () => {
  const { aToken } = useContext(AdminContext);
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">

      <ToastContainer />
      <Navbar/>
      
      <div className="flex items-start">
  <Sidebar />
  <Routes> 
    {/* admin route */}
    <Route path="/" element={<></>} />
    <Route path="/admin-dashboard" element={<Dashboard />} />
    <Route path="/add-doctor" element={<AddDoctor />} />
    <Route path="/doctor-list" element={<DoctorList />} />

    {/*doctor route */}
    <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
    <Route path="/doctor-appointments" element={<DoctorAppointments />} />
   
  </Routes>
</div>
      </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
