const express = require('express');
const app = express();

const nodemailer=require("nodemailer");

const PORT = process.env.PORT || 5000;


app.use(express.static('public'));
app.use(express.json());

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

app.post('/', (req,res)=>{
    console.log(req.body);
    const transporter= nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'array.workspace@gmail.com',
            pass: 'xvbt prim tlsg aumy'
        }
    })
    const mailOptions={
        from: 'array.workspace@gmail.com',
        to: req.body.Mail,
        subject: 'Reservation at Bhojan',
        text: 'Subject: 🍽️ Reservation Confirmed at BHOJAN - Your Culinary Journey Awaits!\n\nDear '+req.body.Name+',\n\nWe hope this message finds you well and eagerly anticipating a delightful dining experience at BHOJAN.\n\nWe are thrilled to confirm your '+req.body.Type+' reservation on '+req.body.Date+' at '+req.body.Time+' for '+req.body.Size+' person(s). Your choice to dine with us is truly an honor, and we can not wait to host you for a memorable culinary journey.\n\nOnce again, thank you for choosing BHOJAN. We look forward to welcoming you and creating wonderful memories together. If you have any questions or need further assistance, Just reply to this mail.\n\nWarm regards,\n\nArray\nManager\nBHOJAN Restaurant'+'\n\nReply "FALSE", if this is a mistake'
    }
    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent:'+info.response);
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log('Server is running')
})