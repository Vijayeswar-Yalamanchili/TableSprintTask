import React from 'react'
import { Button } from 'react-bootstrap'
import { faBox, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProductsContent.css'

function ProductsContent() {
  return <>
    <div className='contentBody'>
      <div className='headerArea d-flex mx-5 my-4'>
        <div className='headerLeft d-flex'>
          <div className='headerCat d-flex'>
            <FontAwesomeIcon icon={faBox} style={{color : "#8D8D9A", width : "1.75rem", height : "1.75rem"}}/>
            <p className='mb-0 ms-2' style={{fontSize : "x-large", width : "8rem"}}>Products</p>  
          </div>
          <div className="searchBar d-flex ms-5">
            <div className='searchIcon ms-2'><FontAwesomeIcon icon={faMagnifyingGlass} style={{color : "#8D8D9A", width : "1.25rem", height : "1.25rem"}}/></div>
            <input type="search" className='searchField' placeholder='Type here to search ...'/>
          </div>
        </div>
        <div className="headerRight">
          <Button >Add New</Button>
        </div>
      </div>
    </div>
  </>
}

export default ProductsContent