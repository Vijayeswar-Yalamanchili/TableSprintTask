import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faHome, faListDots, faPlay, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

function Sidebar() {
  return <>
    <div className="sidebarBlock">          
      <ul className="sidebar">
        <li className='d-flex flex-row justify-content-between align-items-center'>
          <Link to={'/dashboard'} className='d-flex flex-row align-items-center' style={{textDecoration : "none", color : "black"}}>
            <FontAwesomeIcon icon={faHome} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Dashboard</p>
          </Link>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>
        <li className='d-flex flex-row justify-content-between align-items-center'>
          <Link to={'/category'} className='d-flex flex-row align-items-center' style={{textDecoration : "none", color : "black"}}>
            <FontAwesomeIcon icon={faStarOfLife} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Category</p>
          </Link>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>
        <li className='d-flex flex-row justify-content-between align-items-center'>
          <Link to={'/subcategory'} className='d-flex flex-row align-items-center' style={{textDecoration : "none", color : "black"}}>
            <FontAwesomeIcon icon={faListDots} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Subcategory</p>
          </Link>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>
        <li className='d-flex flex-row justify-content-between align-items-center'>
          <Link to={'/products'} className='d-flex flex-row align-items-center' style={{textDecoration : "none", color : "black"}}>
            <FontAwesomeIcon icon={faBox} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Products</p>
          </Link>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>        
      </ul>
    </div>
    </>
}

export default Sidebar