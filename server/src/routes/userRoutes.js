import express from 'express'
import auth from '../helper/auth.js'
import userAuthController from '../controller/userAuthController.js'
// import userController from '../controller/userController.js'

const router = express.Router()

router.post('/login',userAuthController.login)
router.post('/register',userAuthController.register)
router.put('/forgotpassword',userAuthController.forgotPassword)
router.put('/resetpassword',userAuthController.resetPassword)
router.put('/logout/:id', auth.authenticate,userAuthController.logout)

// router.get('/currentuser/:id',auth.authenticate,userController.currentUser)

export default router