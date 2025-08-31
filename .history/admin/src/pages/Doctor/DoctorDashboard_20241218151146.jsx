import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';

const DoctorDashboard = () => {
  const { dToken, dashData, setDashData, getDashData } = useContext(DoctorContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  if (!dashData) {
    return <div>Loading...</div>;  // Show loading message until data is available
  }

  return (
    <div>
      {/* Render dashboard content here */}
    </div>
  );
};

export default DoctorDashboard;

