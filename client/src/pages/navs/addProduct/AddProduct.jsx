import React from 'react'
import './AddProduct.css'
import AppNavbar from '../../../components/common/navbar/AppNavbar'
import Sidebar from '../../../components/common/sidebar/sidebar'
import AddProductContent from '../../../components/addProductContent/AddProductContent'

function AddProduct() {
  return <>
    <AppNavbar/>
    <div className='d-flex bodyArea'>
      <Sidebar/>
      <AddProductContent/>
    </div>
  </>
}

export default AddProduct