import React from 'react'
import AppNavbar from '../../../components/common/navbar/AppNavbar'
import Sidebar from '../../../components/common/sidebar/sidebar'
import ProductsContent from '../../../components/productsContent/ProductsContent'
import './Products.css'

function Products() {
  return <>
    <AppNavbar/>
    <div className='d-flex bodyArea'>
      <Sidebar/>
      <ProductsContent/>
    </div>
  </>
}

export default Products