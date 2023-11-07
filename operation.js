var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oyindamolababalola8@gmail.com',
    pass: 'cknc qzwo akjr ezfm'
  }
});

var mailOptions = {
  from: 'oyindamolababalola8@gmail.com',
  to: 'samiatadegbenro@gamil.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});