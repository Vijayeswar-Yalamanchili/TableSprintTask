import React, { useState } from 'react'
import { Col, Form, Button, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import authBackground from '../../assets/signUpBG.svg'
import authLogo from '../../assets/authLogo.png'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'
import './AuthPage.css'

function Login() {

  let navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(true)

  const handleShowForgotPassword = () => {
    setShowLoginForm(!showLoginForm)
    setShowForgotPassword(!showForgotPassword)
  }

  const handleCloseForgotPassword = () => {
    setShowLoginForm(!showLoginForm)
    setShowForgotPassword(!showForgotPassword)
  }

  let formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema:Yup.object({          
      email:Yup.string().required('Email is required').email('Enter a valid email'),
      password:Yup.string().required('Password is required').matches(/^[a-zA-Z0-9!@#$%^&*]{8,20}$/,'Enter a valid Password')
    }),
    onSubmit : async(values) => {
      try {
        setLoading(true)
        let res = await AxiosService.post(`${ApiRoutes.LOGIN.path}`,values)
        if(res.status === 200){
            localStorage.setItem('loginToken',res.data.loginToken)
            navigate('/dashboard')
            localStorage.removeItem('forgotPassToken')
        }
        setLoading(false)
      } catch (error) {
          toast.error(error.response.data.message || error.message)
          setLoading(false)
      }        
    }
  })

  const forgotPasswordFormik = useFormik({
    initialValues:{
      email:'',
    },
    validationSchema:Yup.object({          
      email:Yup.string().required('Email is required').email('Enter a valid email'),
    }),
    onSubmit : async(values) => {
      try {
        setLoading(true)
        let res = await AxiosService.put(`${ApiRoutes.FORGOTPASSWORD.path}`,values)
        if(res.status === 200){
            localStorage.setItem('forgotPassToken',res.data.forgotPassToken)
            toast.success(res.data.message)
        }
        setLoading(false)
      } catch (error) {
        // console.log(error.message)
          toast.error(error.response.data.message || error.message)
          setLoading(false)
      }        
    }
  })

  return <>
    <div className="bgImage d-flex p-0 m-0" style={{backgroundImage: `url(${authBackground})`}}></div>

    {
      showLoginForm ? <div className='loginFormArea rounded-3'>
        <div className='text-center'>
          <div><img src={authLogo} style={{width : "16rem",height : "6rem"}} /></div>
          <p style={{color : "#8F8F8F", fontSize : "larger"}}>Welcome to TablesSprint admin</p>
        </div>

        <Col md xs={12} style={{height : "100%"}}>
          <Form onSubmit={formik.handleSubmit} className='loginAuthForm d-flex mx-auto my-2 p-3' style={{height : "100%"}}>                
            <Form.Group className="mb-4">
              <Form.Label style={{color : "#8F8F8F"}}>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
              {formik.touched.email && formik.errors.email ? (<div className='authErrorText'>{formik.errors.email}</div>) : null}
            </Form.Group>
            
            <Form.Group className="mb-4">
              <Form.Label style={{color : "#8F8F8F"}}>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
              {formik.touched.password && formik.errors.password ? (<div className='authErrorText'>{formik.errors.password}</div>) : null}
            </Form.Group>
            
            <div className='mb-4'>
              <div style={{float : "right", textDecoration : "none", color : "#5C218B", cursor : "pointer"}} onClick={()=> handleShowForgotPassword()}>Forgot Password ?</div>
            </div>
            
            <div className="d-grid mb-2">
              <Button className='formBtns' type='submit' disabled={loading}>{loading ? <Spinner animation="border" /> : 'Login'}</Button>
            </div>
            <hr style={{color:"blue"}}/>
            <div className="d-grid mb-4">
              <Button className='formBtns' onClick={()=>navigate('/register')}>Sign Up</Button>
            </div>
          </Form>
        </Col>
      </div> : null
    }

    {
      showForgotPassword ? <div className='forgotPassArea p-3 rounded-3'>          
        <div className='text-center'>
          <h5 style={{color : "#5C218B"}}>Did you forget password ?</h5>
          <p style={{color : "#8F8F8F"}}>Enter your email address and we’ll send you a link to restore password</p>
        </div>
        <div className='px-5'>
          <Form onSubmit={forgotPasswordFormik.handleSubmit}>
            <Form.Group className="m-4">
              <Form.Label style={{color : "#8F8F8F"}}>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" id='email' name='email' onChange={forgotPasswordFormik.handleChange} value={forgotPasswordFormik.values.email} onBlur={forgotPasswordFormik.handleBlur}/>              
              {forgotPasswordFormik.touched.email && forgotPasswordFormik.errors.email ? (<div className='authErrorText'>{forgotPasswordFormik.errors.email}</div>) : null}
            </Form.Group>
            <div className="d-grid m-4">
              <Button className='formBtns' type='submit' disabled={loading}>{loading ? <Spinner animation="border" /> : 'Request reset link'}</Button>
              <p className='mb-0 mt-3 text-center' style={{color : "#8F8F8F", cursor : "pointer"}} onClick={() => handleCloseForgotPassword()}>Back to login</p>
            </div>
          </Form>
        </div>
      </div> : null
    }
  </>
}

export default Login