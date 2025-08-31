// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorDahboard = () => {
  const {dashData,setDashData,getDashData} = useContext(DoctorContext)
  return (
    <div>
      DoctorDahboard
    </div>
  )
}

export default DoctorDahboard
