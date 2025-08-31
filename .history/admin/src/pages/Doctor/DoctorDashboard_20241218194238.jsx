// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';

const DoctorDashboard = () => {  
  const { dToken, dashData, setDashData, getDashData } = useContext(DoctorContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken])

  return dashData && (
    <div className='m-5'>
      
    </div>
  );
};

export default DoctorDashboard;  
