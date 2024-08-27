import React from 'react'
import './AddCategory.css'
import AppNavbar from '../../../components/common/navbar/AppNavbar'
import Sidebar from '../../../components/common/sidebar/sidebar'
import AddCategoryContent from '../../../components/addCategoryContent/AddCategoryContent'

function AddCategory() {
  return <>
    <AppNavbar/>
    <div className='d-flex bodyArea'>
      <Sidebar/>
      <AddCategoryContent/>
    </div>
  </>
}

export default AddCategory