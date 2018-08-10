import { JsonController, Post, Body } from 'routing-controllers'
const nodemailer = require('nodemailer');

const transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
}

class Email {
    
    name: string
    email: string
    message: string
    
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

@JsonController()
export default class EmailController {

  
  @Post('/send')
  sendEmail(
    @Body() email: Email
  ) {

    var mail = {
        from: email.name ,
        to: 'jose.mesa.solorzano@gmail.com',  
        subject: 'New Message from Contact Form',
        text: `name: ${email.name} \n email: ${email.email} \n message: ${email.message} `
    }
    
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            return 'fail'
        } else {
            return 'succes'
        }
    })
    return 'Working'
  }
}
