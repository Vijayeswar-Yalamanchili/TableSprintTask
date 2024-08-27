import React from 'react'
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faHome, faListDots, faPlay, faStarOfLife } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
  return <>
    <div className="sidebarBlock">          
      <ul className="sidebar">
        <li className='d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex flex-row align-items-center'>
            <FontAwesomeIcon icon={faHome} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Dashboard</p>
          </div>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>
        <li className='d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex flex-row align-items-center'>
            <FontAwesomeIcon icon={faStarOfLife} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Category</p>
          </div>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>
        <li className='d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex flex-row align-items-center'>
            <FontAwesomeIcon icon={faListDots} style={{color : "#8D8D9A"}}/>
            <p className='mb-0 ms-2'>Subcategory</p>
          </div>
          <FontAwesomeIcon icon={faPlay} style={{color : "#8D8D9A"}}/>
        </li>
        <li className='d-flex flex-row justify-content-between align-items-center'>
          <div className='d-flex flex-row align-items-center'>
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