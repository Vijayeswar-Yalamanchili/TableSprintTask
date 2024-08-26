import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: 'vijayeswarybe@gmail.com',
        pass: 'fhqyirzgxaznsliq'        //fhqy irzg xazn sliq
      },
      tls: {
        rejectUnauthorized: false
      }
});

let forgotPasswordMail = async(to,emailVerifyURL) => {
    try {
        let mailContent = await transporter.sendMail({
            from: 'vijayeswarybe@gmail.com',
            to: to,
            subject: 'Code to reset password',
            html: `<div><h3>Hi User!</h3></div>
            <div>
              <p>To reset your password,click the below link</p>
              <a href="${process.env.CLIENT_URL}resetPassword">${emailVerifyURL}</a>     
              <p>Thanks!!!</p>       
            </div>
            `
        })
    } catch (error) {
        console.log(error.message);
    }
}

export default forgotPasswordMail