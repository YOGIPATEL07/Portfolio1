const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Get the email from .env
        pass: process.env.EMAIL_PASS, // Get the password from .env
    },
});


const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // Use environment variable
            pass: process.env.EMAIL_PASS, // Use environment variable
        },
    });

    const mailOptions = {
        from: email,
        to: "yogipatel2870@gmail.com", // Your email address
        subject: `New Message from ${name}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
