import React, { useState } from 'react'
import { Col, Form, Button, Spinner, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import authBackground from '../../assets/signUpBG.svg'
import authLogo from '../../assets/authLogo.png'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'
import './AuthPage.css'

function Register() {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  let formik = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      email:'',
      mobile:'',
      password:'',
      confirmPassword:''
    },
    validationSchema:Yup.object({       
      firstName:Yup.string().required('Firstname is required').max(20,'Name can not exceed 20 characters').min(3,'firstName can not be shorter than 3 leters'),
      lastName:Yup.string().required('Lastname is required').max(20,'Name can not exceed 20 characters').min(1,'LastName can not be shorter than 1 leter'),
      email:Yup.string().required('Email is required').email('Enter a valid email'),
      mobile:Yup.string().required('Mobile is required').matches(/^\d{10}$/,'Enter a valid mobile number'),
      password:Yup.string().required('Password is required').matches(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/,'Enter a valid Password'),
      confirmPassword:Yup.string().required('Confirm Password is required').matches(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/,'Confirm Password should match Password')
    }),
    onSubmit : async(values) => {
        try {          
          setLoading(true)
          if(values.password === values.confirmPassword){
            let res = await AxiosService.post(`${ApiRoutes.REGISTER.path}`,values)
            if(res.status === 200){
              navigate('/')
            }  
            setLoading(false)   
          }else{
            toast.error("Passwords doesnt match! Please enter the same passwords")
            setLoading(false)
          }
        } catch (error) {
            toast.error(error.response.data.message || error.message)
            setLoading(false)
        }
    }
  })

  return <>
    <div className="bgImage d-flex p-0 m-0" style={{backgroundImage: `url(${authBackground})`}}>
    </div>

    <div className='registerFormArea rounded-3'>

      <div className='text-center'>
        <div><img src={authLogo} style={{width : "18.5rem",height : "6.25rem"}} /></div>
        <p className='mb-0' style={{color : "#8F8F8F", fontSize : "larger"}}>Welcome to TablesSprint admin</p>
      </div>

      <Col md xs={12} style={{height : "100%"}}>
        <Form onSubmit={formik.handleSubmit} className='registerAuthForm d-flex mx-auto my-2 p-3' style={{height : "100%"}}>                

          <Row className="mb-2">
            <Col>
              <Form.Label style={{color : "#8F8F8F"}}>Firstname</Form.Label>
              <Form.Control type='text' placeholder="Enter Firstname" id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur}/>
              {formik.touched.firstName && formik.errors.firstName ? (<div className='authErrorText'>{formik.errors.firstName}</div>) : null}
            </Col>
            <Col>
              <Form.Label style={{color : "#8F8F8F"}}>Lastname</Form.Label>
              <Form.Control type='text' placeholder="Enter Lastname" id='lastName' name='lastName' onChange={formik.handleChange} value={formik.values.lastName} onBlur={formik.handleBlur}/>
              {formik.touched.lastName && formik.errors.lastName ? (<div className='authErrorText'>{formik.errors.lastName}</div>) : null}
            </Col>
          </Row>

          <Form.Group className="mb-2">
            <Form.Label style={{color : "#8F8F8F"}}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? (<div className='authErrorText'>{formik.errors.email}</div>) : null}
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label style={{color : "#8F8F8F"}}>Mobile</Form.Label>
            <Form.Control type="text" placeholder="Enter Mobile number" maxLength={10} id="mobile" name='mobile' onChange={formik.handleChange} value={formik.values.mobile} onBlur={formik.handleBlur}/>
            {formik.touched.mobile && formik.errors.mobile ? (<div className='authErrorText'>{formik.errors.mobile}</div>) : null}
          </Form.Group>

          <Row className="mb-1">
            <Col xs={12}>
              <Form.Label style={{color : "#8F8F8F"}}>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
              {formik.touched.password && formik.errors.password ? (<div className='authErrorText'>{formik.errors.password}</div>) : null}
            </Col>
            <Col className='mt-1'>
              <Form.Label style={{color : "#8F8F8F"}}>Confirm Password</Form.Label>
              <Form.Control type='password' placeholder="Re-Enter Password" id="confirmPassword" name='confirmPassword' onChange={formik.handleChange} value={formik.values.confirmPassword} onBlur={formik.handleBlur}/>
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div className='authErrorText'>{formik.errors.confirmPassword}</div>) : null}
            </Col>
          </Row>
          
          <div className="d-grid mt-2 mb-2">
            <Button variant='primary'className='formBtns' type="submit" disabled={loading}>{loading ? <Spinner animation="border" /> : 'Register'}</Button>
          </div>

          <div className='text-center'>
            Already existing user? <Link to={'/'} style={{textDecoration : "none", color : "#8F8F8F"}}>Login</Link>
          </div>

        </Form>
      </Col>
    </div> 
  </>
}

export default Register