"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // hostname
    secureConnection: false, // use SSL
    port: 587, // port for secure SMTP
    auth: {
        user: '*********@gmail.com',
        pass: 'XWxgqQufsV'
    },
    tls:{
        ciphers:'SSLv3'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fiulee Trony" <fiuleetrony@gmail.com>', // sender address
    to: "vishalsharmaraya@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>So Vihsal, Why havent been you joining in office these days</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
 

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);