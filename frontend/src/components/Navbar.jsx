// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
  const navigate = useNavigate()

  const {token,setToken,userData} = useContext(AppContext)

  const [showMenu, setShowMenu] = useState(false)

  const logout = () => {
      setToken(false)
      localStorage.removeItem('token')
  }
  

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
        token && userData
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt="Profile" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointment</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="Menu" />

        {/* Mobile menu */}
        <div className={`${showMenu ? 'flex w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-between items-center p-4'>
            <img  onClick ={()=>setShowMenu(false)} src={assets.logo} alt="Logo" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close" className='cursor-pointer' />
          </div>
          <ul className='flex flex-col items-start p-4'>
            <NavLink to='/' onClick={() => setShowMenu(false)}>
              <li className='py-2'><p>HOME</p></li>
            </NavLink>
            <NavLink to='/doctors' onClick={() => setShowMenu(false)}>
              <li className='py-2'><p>ALL DOCTORS</p></li>
            </NavLink>
            <NavLink to='/about' onClick={() => setShowMenu(false)}>
              <li className='py-2'><p>ABOUT</p></li>
            </NavLink>
            <NavLink to='/contact' onClick={() => setShowMenu(false)}>
              <li className='py-2'><p>CONTACT</p></li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

