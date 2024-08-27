import React from 'react'
import { Button } from 'react-bootstrap'
import { faMagnifyingGlass, faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CategoryContent.css'

function CategoryContent() {
  return <>
    <div className='contentBody'>
      <div className='headerArea d-flex mx-5 my-4'>
        <div className='headerLeft d-flex'>
          <div className='headerCat d-flex'>
            <FontAwesomeIcon icon={faStarOfLife} style={{color : "#8D8D9A", width : "1.75rem", height : "1.75rem"}}/>
            <p className='mb-0 ms-2' style={{fontSize : "x-large", width : "8rem"}}>Category</p>  
          </div>
          <div className="searchBar d-flex ms-5">
            <div className='searchIcon ms-2'><FontAwesomeIcon icon={faMagnifyingGlass} style={{color : "#8D8D9A", width : "1.25rem", height : "1.25rem"}}/></div>
            <input type="search" className='searchField px-1' placeholder='Type here to search ...'/>
          </div>
        </div>
        <div className="headerRight">
          <Button >Add New</Button>
        </div>
      </div>
    </div>
  </>
}

export default CategoryContent