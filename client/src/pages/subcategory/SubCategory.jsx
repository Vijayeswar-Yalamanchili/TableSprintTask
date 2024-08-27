import React from 'react'
import AppNavbar from '../../components/common/navbar/AppNavbar'
import Sidebar from '../../components/common/sidebar/sidebar'
import SubCategoryContent from '../../components/subCategoryContent/SubCategoryContent'
import './SubCategory.css'

function SubCategory() {
  return <>
    <AppNavbar/>
    <div className='d-flex bodyArea'>
      <Sidebar/>
      <SubCategoryContent/>
    </div>
  </>
}

export default SubCategory