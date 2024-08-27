import React from 'react'
import { Image } from 'react-bootstrap'
import logo from '../../assets/authLogo.png'
import './DashboardContent.css'

function HomeContent() {
  return <>
    <div className='contentBody m-2 text-center pt-5'>
      <Image src={logo} width={250} height={100}/>
      <h3 className='mx-auto mt-1'>Welcome to TableSprint Admin Dashboard page</h3>
    </div>
  </>
  // return (
  //   <h3 className='mx-auto mt-5'>Welcome to Admin Dashboard page</h3>
  // )
}

export default HomeContent