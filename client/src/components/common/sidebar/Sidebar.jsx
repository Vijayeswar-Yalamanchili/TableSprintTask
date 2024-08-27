import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faHome, faListDots, faPlay, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

function Sidebar() {
  let navigate = useNavigate()
  return <>
    <div className="sidebarBlock">          
      <ul className="sidebar">
        <li className='d-flex flex-row justify-content-between align-items-center' onClick={() => navigate('/dashboard')}>
          <div className='d-flex flex-row align-items-center' style={{textDecoration : "none", color : "black"}}>
            <FontAwesomeIcon icon={faHome} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Dashboard</p>
          </div>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>
        <li className='d-flex flex-row justify-content-between align-items-center' onClick={() => navigate('/category')}>
          <div className='d-flex flex-row align-items-center' style={{textDecoration : "none", color : "black"}}>
            <FontAwesomeIcon icon={faStarOfLife} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Category</p>
          </div>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>
        <li className='d-flex flex-row justify-content-between align-items-center' onClick={() => navigate('/subcategory')}>
          <div className='d-flex flex-row align-items-center' style={{textDecoration : "none", color : "black"}}>
            <FontAwesomeIcon icon={faListDots} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Subcategory</p>
          </div>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>
        <li className='d-flex flex-row justify-content-between align-items-center' onClick={() => navigate('/products')}>
          <div className='d-flex flex-row align-items-center' style={{textDecoration : "none", color : "black"}}>
            <FontAwesomeIcon icon={faBox} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Products</p>
          </div>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>        
      </ul>
    </div>
    </>
}

export default Sidebar