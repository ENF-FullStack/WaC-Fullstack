const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "mail.tutorit.net",
    port: 26,
    secure: false,
    auth: {
      user: "student@tutorit.net", 
      pass: "test123" 
    }
  });


async function send(to,subject,text,html){
    let descr={to,subject,text,html};
    descr.to="jyrki.martonen@gmail.com";  // FOR TESTING force your own email!!!!
    descr.from='"Student" <student@tutorit.net>';
    let x=await transporter.sendMail(descr);
    console.log(x);
}

send('some.one@some.where.net','test','Hello','<h1>Hello</h1>');