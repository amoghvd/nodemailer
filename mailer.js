const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'clashroyaleshorts24@gmail.com',
        pass: 'ptym zzzh yzzq rvsi' // Use the generated app password here
    }
});