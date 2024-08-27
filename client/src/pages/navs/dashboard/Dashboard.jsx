import React from 'react'
import AppNavbar from '../../../components/common/navbar/AppNavbar'
import Sidebar from '../../../components/common/sidebar/sidebar'
import DashboardContent from '../../../components/dashboardContent/DashboardContent'
import './Dashboard.css'

function Dashboard() {
  return <>
    <AppNavbar/>
    <div className='d-flex bodyArea'>
      <Sidebar/>
      <DashboardContent/>
    </div>
  </>
}

export default Dashboard