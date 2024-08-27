import React from 'react'
import './AddSubCategory.css'
import AppNavbar from '../../../components/common/navbar/AppNavbar'
import Sidebar from '../../../components/common/sidebar/sidebar'
import AddSubCategoryContent from '../../../components/addSubCategoryContent/AddSubCategoryContent'

function AddSubCategory() {
  return <>
    <AppNavbar/>
    <div className='d-flex bodyArea'>
      <Sidebar/>
      <AddSubCategoryContent/>
    </div>
  </>
}

export default AddSubCategory