import React, { useState } from 'react'
import { Col, Form, Button, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import authBackground from '../../assets/signUpBG.svg'
import authLogo from '../../assets/authLogo.png'
import AxiosService from '../../utils/AxiosService'
import ApiRoutes from '../../utils/ApiRoutes'
import './AuthPage.css'

function ResetPassword() {

    let navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    let formik = useFormik({
        initialValues:{
        email:'',
        password:'',
        confirmPassword:''
        },
        validationSchema:Yup.object({          
        email:Yup.string().required('Email is required').email('Enter a valid email'),
        password:Yup.string().required('Password is required').matches(/^[a-zA-Z0-9!@#$%^&*]{8,20}$/,'Enter a valid Password'),
        confirmPassword:Yup.string().required('Confirm Password is required').matches(/^[a-zA-Z0-9!@#$%^&*]{8,15}$/,'Confirm Password should match Password')
        }),
        onSubmit : async(values) => {
            try {
            setLoading(true)
            if(values.password === values.confirmPassword){
                console.log(values)
                let res = await AxiosService.put(`${ApiRoutes.RESETPASSWORD.path}`,values)
                if(res.status === 200){
                    toast.success("Password updated")
                    navigate('/')
                }
            }
            setLoading(false)
            } catch (error) {
                toast.error(error.response.data.message || error.message)
                setLoading(false)
            }        
        }
    })

    return <>
        <div className="bgImage d-flex p-0 m-0" style={{backgroundImage: `url(${authBackground})`}}>
        </div>

        <div className='resetPasswordArea rounded-3'>

            <div className='text-center'>
                <Link to={'/'}><img src={authLogo} style={{width : "16rem",height : "6rem"}}/></Link>
                <p className='mb-0' style={{color : "#8F8F8F", fontSize : "larger"}}>Reset Password</p>
            </div>

            <Col md xs={12} style={{height : "100%"}}>``
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

                    <Form.Group className="mb-4">
                        <Form.Label style={{color : "#8F8F8F"}}>Confirm Password</Form.Label>
                        <Form.Control type='password' placeholder="Re-Enter Password" id="confirmPassword" name='confirmPassword' onChange={formik.handleChange} value={formik.values.confirmPassword} onBlur={formik.handleBlur}/>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div className='authErrorText'>{formik.errors.confirmPassword}</div>) : null}
                    </Form.Group>
                    
                    <div className="d-grid mb-2">
                        <Button className='formBtns' type='submit' disabled={loading}>{loading ? <Spinner animation="border" /> : 'Update Password'}</Button>
                    </div>
                </Form>
            </Col>
        </div>

    </>
}

export default ResetPassword