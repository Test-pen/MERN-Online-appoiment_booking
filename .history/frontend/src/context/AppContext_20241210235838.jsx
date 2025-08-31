/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import toast from 'react-toastify'

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$';
    const backendurl = import.meta.env.VITE_BACKEND_URL;

    const [doctors, setDoctors] = useState([]);
    const[token,setToken] = useState('')

 
      

    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(backendurl + '/api/doctor/list');
            if (data.success) {
                // Filter out "Dr. Richard James" from the list
                const filteredDoctors = data.doctors.filter(doctor => doctor.name !== "Dr. Richard James");
                setDoctors(filteredDoctors);

            }else {
                toast.error(data.message)
            }
        } catch (error) {
            // Handle error here if needed
        }
    }
    const value = {
        doctors,
        currencySymbol,
        token,setToken,
    }

    useEffect(() => {
        getDoctorsData();
    }, []);

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

