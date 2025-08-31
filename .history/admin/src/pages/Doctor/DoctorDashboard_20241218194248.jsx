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
      <div className='flex flex-wrap gap-3'>
  <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2'>
    <img className='w-14' src={assets.doctor_icon} alt="" />
    <div>
      <p className='text-xl font-semibold text-gray-600'>{dashData.doctors}</p>
      <p className='text-gray-400'>Doctors</p>
    </div>
  </div>

  <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2'>
    <img className='w-14' src={assets.appointments_icon} alt="" />
    <div>
      <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
      <p className='text-gray-400'>Appointments</p>
    </div>
  </div>

  <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2'>
    <img className='w-14' src={assets.patients_icon} alt="" />
    <div>
      <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
      <p className='text-gray-400'>Patients</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default DoctorDashboard;  
