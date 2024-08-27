import React from 'react'
import AppNavbar from '../../../components/common/navbar/AppNavbar'
import Sidebar from '../../../components/common/sidebar/sidebar'
import CategoryContent from '../../../components/categoryContent/CategoryContent'
import './Category.css'

function Category() {
  return <>
    <AppNavbar/>
    <div className='d-flex bodyArea'>
      <Sidebar/>
      <CategoryContent/>
    </div>
  </>
}

export default Category