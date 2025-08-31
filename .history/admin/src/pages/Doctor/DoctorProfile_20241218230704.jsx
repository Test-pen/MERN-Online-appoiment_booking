import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData } = useContext(DoctorContext);
  const { currency, backendUrl } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    <div>
      <h2>Doctor Profile</h2>
      {profileData ? (
        <div>
          {/* Render profile data */}
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Specialization: {profileData.specialization}</p>
          {/* Add more fields as necessary */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default DoctorProfile;
