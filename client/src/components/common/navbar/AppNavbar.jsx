import React, { useState } from 'react'
import { Image, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faWarning } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../assets/logo.png'
import './AppNavbar.css'

function AppNavbar() {

  const token = localStorage.getItem('loginToken')
  const [showLogout, setShowLogout] = useState(false)

  const handleLogout = async() => {
    toast.success("Logged Out")
    setShowLogout(!showLogout)
  }
  
  return <>
    <div className='navbarArea d-flex px-4'>
      <div className='navbarLeftArea d-flex'>
        <Image src={logo} className='navImage'/>
        <p className='navbarTitle mb-0'>TableSprint</p>
      </div>
      <div className='navbarRightArea d-flex'>
        {
          token ? <div className='me-3' onClick={() => setShowLogout(!showLogout)}><FontAwesomeIcon icon={faUser} style={{color : "white", height : "1.75rem"}}/></div> : <Navigate to="/"/>
        }
      </div>
    </div>

    {
      showLogout && <>
        <div className='logoutPopUp p-5 text-center'>
          <h4><FontAwesomeIcon icon={faWarning} style={{color : "#d82424"}} className='me-2'/>Log Out</h4>
          <p className='mb-0 mt-3'>Are you sure you want to log out?</p>
          <div className='logoutBtns d-flex mt-4'>
            <Button variant='outline-secondary' className='px-4' style={{color : "black", borderRadius : "2rem"}} onClick={() => setShowLogout(!showLogout)}>Abort</Button>
            <Button className='px-4' style={{backgroundColor : "#5C218B", border : "none", borderRadius : "2rem"}}  onClick={() => handleLogout()}>Confirm</Button>
          </div>
        </div>
      </>
    }
  </>
}

export default AppNavbar