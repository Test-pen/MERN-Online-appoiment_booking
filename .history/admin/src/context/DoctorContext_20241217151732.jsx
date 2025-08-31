import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const DoctorContext = createContext(); // Context for Admin

const DoctorContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [dToken, setDToken] = useState(() => localStorage.getItem("dToken") || "");
  const [appointments, setAppointments] = useState([])

  const getAppointments = async () => {
      try {
        const {data}= await axios.get(backendUrl+ '/api/doctor/profile', {headers:{dToken}})
        if(data.success) {
          setAppointments(data.appointments.reverse())
        } else {

        }
      } catch (error) {
        
      }
  }
  const value = {
    dToken,setDToken,
    backendUrl,
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider
