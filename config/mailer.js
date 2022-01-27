const nodemailer = require("nodemailer");
require("dotenv").config();

const user = process.env.MAIL;
const pass = process.env.MAIL_PASS;

const transport = nodemailer.createTransport(
{
    service: "Gmail",
    auth:
    {
        user: user,
        pass: pass,
    }
});

const sendConfMail = (name, email) =>
{
    transport.sendMail
    (
        {
            from: user,
            to: email,
            subject: "Account Confirmationt",
            html: 
                `
                    <h1>Email Confirmation</h1>
                    <h2>Hello ${name}</h2>
                    <p>Thank you for sigining up.</p>
                `,
      }
    ).catch( err => console.log(err) );
}
module.exports = sendConfMail;