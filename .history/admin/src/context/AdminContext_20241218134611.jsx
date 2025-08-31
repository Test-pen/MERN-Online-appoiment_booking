import { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [dToken, setDToken] = useState(localStorage.getItem("dToken") ? localStorage.getItem("dToken") : "");

  const [doctors, setDoctors] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + '/api/admin/all-doctors',
        {}, // Correct usage of an empty object as the request body
        { headers: { aToken } } // Correct syntax for passing headers
      );
      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeAvailablity = async (docId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/admin/change-availability',{ docId },{ headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message); // Notify success
        getAllDoctors(); // Refresh the doctor list
      } else {
        toast.error(error.message)
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    aToken,setAToken,
    backendUrl,doctors,
    getAllDoctors,changeAvailablity // Ensure this function is included in the context
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;

