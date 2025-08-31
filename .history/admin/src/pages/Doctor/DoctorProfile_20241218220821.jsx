import React, { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'

const DoctorProfile = () => {
  const {dToken,profileData,setProfileData,getProfileData} = useContext(DoctorContext)
  const{currency,backendUrl}=useContext(AppContext)
  return (
    <div>
      doctorProfile
    </div>
  )
}

export default DoctorProfile
