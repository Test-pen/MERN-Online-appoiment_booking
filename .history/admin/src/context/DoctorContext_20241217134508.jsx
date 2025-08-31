import { createContext, useState } from "react";

export const DoctorContext = createContext(); // Context for Admin

const DoctorContextProvider = (props) => {

  const backendurl = import.meta.env.VITE_BACKEND_URL

  const [dtoken,setDToken] = useState(localStorage.getItem("dToken") ? localStorage.getItem("dToken") : '')
  const value = {
    dtoken,setDToken,
    backendurl,
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider
