/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currencySymbol = '$';
    const backendurl = import.meta.env.VITE_BACKEND_URL;

    const [doctors, setDoctors] = useState([]);
    const[token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)
    const [userData,setUserData] = useState(false)

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
            console.log(error);
            toast.error(error.message)
        }
    }
    const loadUserProfileData = async () => {
        try {
            const {data} = await axios.get(backendurl+ '/api/user/get=profile',{headers:{token}})
            if (data.success) {
                setUserData(data.userData)
            } else {
               toast.error(data.message) 
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }

    }
    const value = {
        doctors,
        currencySymbol,
        token,setToken,
        backendurl,
        userData,setUserData,
        loadUserProfileData
    }

    useEffect(() => {
        getDoctorsData();
    }, [])

    useEffect(() => {

    },[token])
    if (token) {
        loadUserProfileData()  
    } else {
        setUserData(false)
    }
    },[token])


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

