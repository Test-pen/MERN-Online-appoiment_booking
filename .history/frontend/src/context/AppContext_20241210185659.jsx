/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { doctors } from "../assets/assets"; // Corrected the path here
import axios from 'axios'

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$'
    const backendurl = import.meta.env.VITE_BACKEND_URL 
    const [ doctors,setDoctors] = useState([])
    const value = {
        doctors,
        currencySymbol
    }
    const getDoctorsData = async () => {
        try {
            const {data} = await axios.get(backendurl + '/api/doctor/list')
            
        } catch (error) {
            
        }

    }


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
