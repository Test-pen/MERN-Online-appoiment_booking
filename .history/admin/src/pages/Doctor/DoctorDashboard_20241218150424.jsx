// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';

const DoctorDashboard = () => {  // Corrected typo here
  const { dToken, dashData, setDashData, getDashData } = useContext(DoctorContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return dashData && (
    <div>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default DoctorDashboard;  // Corrected export name here
