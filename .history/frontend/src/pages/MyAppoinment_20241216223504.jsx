import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const MyAppointment = () => {
  const { backendurl, token } = useContext(AppContext)
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendurl + '/api/user/appointments', { headers: { token } })
      if (data.success) {
        setAppointments(data.appointments.reverse())
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendurl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments() // Refresh the appointments
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  

  useEffect(() => {
    if (token) {
      getUserAppointments() // Load user appointments when token is available
    }
  }, [token])

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointment</p>
      <div>
        {appointments.map((item, index) => (
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.docData.image} alt="" />
            </div>
            <div className='flex-1 text:sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
              <p>{item.docData.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>Address:</p>
              <p className='text-xs'>{item.docData.address.line1}</p>
              <p className='text-xs'>{item.docData.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time: </span> {item.slotDate}| {item.slotTime}</p>
            </div>

            {/* Conditional rendering for the buttons */}
            <div className='flex flex-col gap-2 justify-end'>
              {/* Show the "Pay Online" button only if payment is not completed */}
              {!item.paymentCompleted && !item.cancelled ? (
                <button
                  onClick={() => navigate('/payment')}
                  className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-green-700 hover:text-white transition-all duration-300"
                >
                  Pay Online
                </button>
              ) : item.paymentCompleted && !item.cancelled ? (
                <button className="sm:min-w-48 py-2 border border-blue-500 rounded text-blue-500">
                  Paid
                </button>
              ) : null}

              {/* Show "Cancel Appointment" button only if the appointment is not cancelled */}
              {!item.cancelled && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-700 hover:text-white transition-all duration-300'
                >
                  Cancel Appointment
                </button>
              )}

              {/* Show "Appointment Cancelled" button if the appointment is cancelled */}
              {item.cancelled && (
                <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>
                  Appointment Cancelled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment

