import React from 'react'
import { Image } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/logo.png'
import './AppNavbar.css'

function AppNavbar() {
  let navigate = useNavigate()
  let token = localStorage.getItem('loginToken')
  return <>
    <div className='navbarArea d-flex px-5'>
      <div className='navbarLeftArea d-flex'>
        <Image src={logo} className='navImage'/>
        <p className='navbarTitle mb-0'>TableSprint</p>
      </div>
      <div className='navbarRightArea d-flex'>
        {
          token ? <div><FontAwesomeIcon icon={faUser} style={{color : "white", height : "1.75rem"}}/></div> : <Navigate to="/"/>
        }
      </div>
    </div>
  </>
}

export default AppNavbar