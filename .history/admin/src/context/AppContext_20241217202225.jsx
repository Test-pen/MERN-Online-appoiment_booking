import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date(); // Define today's date
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  }
  const currency = '$'

  const value = { calculateAge,currency }; // Add calculateAge to the context value

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
