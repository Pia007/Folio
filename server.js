// Load required packages
const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer'); 

// use express() to set uo the server to run on port 5000
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);   
app.listen(5000, () => console.log("Server is Running!"));

// Setting up nodemailer with Gmail
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'piatorain@gmail.com',
        pass: 'TrustMeNow@1007',
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

// TESTED node server.js in terminial  Response: Server is running. Server is ready to take messages

router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "piatorain@gmail.com",
        subject: "Contact Form Submission from your website",
        html: `<p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Subject: ${subject}</p>
                <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR! Something went wrong!" });
        } else {
            res.json({ status: "Message Sent to Pia Torain" });
        }
    });
});