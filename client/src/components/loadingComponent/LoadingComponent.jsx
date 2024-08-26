import React from 'react'
import { Spinner } from 'react-bootstrap'
import './LoadingComponent.css'

function LoadingComponent() {
    return <>
    <div>
      <p className='loader'><Spinner animation='border'/></p>
    </div>
</>
}

export default LoadingComponent