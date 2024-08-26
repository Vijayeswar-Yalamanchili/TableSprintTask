import auth from "../helper/auth.js"
import hash from "../helper/hash.js"
import db from '../config/db.js'
import forgotPasswordMail from "../helper/emailService.js"

const login = async(req,res) => {
    try {
        const {email,password} = req.body
        // check if user exists and login
        const checkUserEmailQuery = `SELECT * FROM userauths WHERE email = ?`
        db.query(checkUserEmailQuery,[email],async(err,result) => {
            if(err) throw err
            if(result.length === 0){
                res.status(400).send({
                    message : `Email Not Found`
                })
            }
            const user = result[0]
            if(await hash.hashCompare(password,user.password)){
                db.query(`UPDATE userauths SET isLoggedIn = 1 WHERE email = ?`,[user.email],async(err,updated)=> {
                    if (err) return res.status(500).json({ error: 'Failed to update user login status' })
                    if(updated){
                        const loginToken = await auth.createLoginToken({
                            id : user.userId,
                            firstName: user.firstName,
                            lastName : user.lastName,
                            email:user.email,
                            isLoggedIn : user.isLoggedIn,
                            isAdmin : user.isAdmin
                        })
                        res.status(200).send({
                            message : "Login Successful",
                            loginToken,
                        })
                    }
                })                
            }else {
                res.status(400).send({
                    message : "Incorrect Password"
                })
            }
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in fetching email"
        })
    }
}

const register = async(req,res) => {
    try {
        const {email, password,firstName,lastName,mobile} = req.body
        // check if user exists
        const checkUserEmailQuery = `SELECT * FROM userauths WHERE email = ?`
        db.query(checkUserEmailQuery,[email],(err,user) => {
            if(err) throw err
            if(user.length > 0){
                res.status(400).send({
                    message : `User with ${email} already exists. Err!`
                })
            }
        })
        // Insert user data
        let hashedPassword = await hash.createHash(password)
        const createUserQuery = `INSERT INTO userauths (firstName, lastName, mobile, email , password, isLoggedIn, createdAt) VALUES (?,?,?,?,?,?,?)`
        db.query(createUserQuery,[firstName,lastName,mobile,email,hashedPassword,0,new Date()],(err,newUser) => {
            if(err) throw err
            if(newUser) {
                res.status(200).send({
                    message : "User created successfully",
                    newUser
                })
            }            
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in fetching email"
        })
    }
}

const forgotPassword = async(req,res) => {
    try {
        const {email} = req.body
        db.query(`SELECT * FROM userauths WHERE email = ?`,[email],async(err,user) => {
            if(err) throw err
            if(user.length > 0){
                let emailHashed = await hash.createHash(email)
                db.query(`UPDATE userauths SET hashedEmail = ? WHERE email = ?`,[emailHashed,email],async(err,updated) => {
                    if(err) return res.status(500).json({ error: 'Something went wrong in logging out' })
                    if(updated){
                        const forgotPassToken = await auth.createForgotPassToken({
                            email:user.email,
                            userId : user.userId
                        })
                        res.status(200).send({
                            message : "Please Check Your Email",
                            email: user.email,
                            userId : user.userId,
                            forgotPassToken
                        })
                        db.query(`UPDATE userauths SET forgotPassToken = ? WHERE email = ?`,[forgotPassToken,email],async(err,updated) => {
                            if(err) return res.status(500).json({ error: 'Something went wrong in logging out' })
                            if(updated) {
                                db.query(`SELECT * FROM userauths WHERE email = ?`,[email], async(err,result) => {
                                    if(err) return res.status(500).json({ error: 'Something went wrong in logging out' })
                                        if(result){
                                            const emailVerifyURL = `${process.env.CLIENT_URL}resetPassword/${result[0].hashedEmail}/verify/${result[0].forgotPassToken}`
                                            await forgotPasswordMail(email, emailVerifyURL)
                                        }
                                })
                            }
                        }) 
                    }
                })                
            }else {
                res.status(400).send({
                    message  : "Email Id not found"
                })
            }
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in fetching email"
        })
    }
}

const resetPassword = async(req,res) => {
    try {
        const { email, password } = req.body
        console.log(email,password)
        db.query(`SELECT * FROM userauths WHERE email = ?`,[email],async(err,result) => {            
            if(err) throw err
            if(result.length === 1){
                const user = result[0]
                let hashedPassword = await hash.createHash(password)
                db.query(`UPDATE userauths SET password = ? WHERE email = ?`,[hashedPassword,email],async(err,updated) => {
                    if(err) return res.status(500).json({ error: 'Something went wrong in logging out' })
                    if(updated){
                        res.status(200).send({
                            message : "Password updated Successfully"
                        })
                    }
                })
            }else{
                res.status(400).send({
                    message : "Email-id not found"
                })
            }
        })        
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in logging out"
        })
    }
}

const logout = async(req,res) => {
    try {
        const { id } = req.params
        const checkUserIdQuery = `SELECT * FROM userauths WHERE userId = ?`
        db.query(checkUserIdQuery,[id],async(err,result) => {            
            if(err) throw err
            if(result.length === 1){
                const user = result[0]
                db.query(`UPDATE userauths SET isLoggedIn = 0 WHERE userId = ?`,[user.userId],async(err,updated) => {
                    if(err) return res.status(500).json({ error: 'Something went wrong in logging out' })
                    if(updated){
                        res.status(200).send({
                            message : "Logged out Successfully"
                        })
                    }
                })
            }
        })        
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in logging out"
        })
    }
}

export default {
    login,
    register,
    forgotPassword,
    resetPassword,
    logout
}