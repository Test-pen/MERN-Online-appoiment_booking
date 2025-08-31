import { createContext } from "react";

export const DoctorContext = createContext(); // Context for Admin

const DoctorContextProvider = (props) => {
  const value = {
    // Add properties or methods you want to share
  };

  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};

export default DoctorContextProvider
