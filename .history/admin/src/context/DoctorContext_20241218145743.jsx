import { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

// Create the context
export const DoctorContext = createContext();

// Define the provider and export it directly as a named export
export const DoctorContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // State management
  const [dToken, setDToken] = useState(localStorage.getItem("dToken") ? localStorage.getItem("dToken") : "");
  const [appointments, setAppointments] = useState([]);
  const [dashData, setDashData] = useState(false);

  // Function to get appointments
  const getAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/appointments', { headers: { dToken } });
      if (data.success) {
        setAppointments(data.appointments);
        console.log(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Function to complete an appointment
  const completeAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/complete-appointment', { appointmentId }, { headers: { dToken } });
      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Function to cancel an appointment
  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/doctor/cancel-appointment', { appointmentId }, { headers: { dToken } });
      if (data.success) {
        toast.success(data.message);
        getAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Function to get dashboard data
  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/dashboard', { headers: { dToken } });
      if (data.success) {
        setDashData(data.dashData);
        console.log(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Provide context values
  const value = {
    dToken,
    setDToken,
    backendUrl,
    appointments,
    setAppointments,
    getAppointments,
    completeAppointment,
    cancelAppointment,
    dashData,
    setDashData,
    getDashData,
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

