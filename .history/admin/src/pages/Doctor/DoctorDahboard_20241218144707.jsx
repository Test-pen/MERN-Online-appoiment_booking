// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorDahboard = () => {
  const {dToken,dashData,setDashData,getDashData} = useContext(DoctorContext)
useEffect(()=>{
  if(dToken) {
    getDashData()
  }
},[dToken])  
  return  dashData &&(
    <div>
    </div>
  )
}

export default DoctorDahboard
