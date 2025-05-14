require("dotenv").config(); 
const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_PASS;

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
console.log('hi mahmoud');

const app = express();
app.use(cors());
app.use(bodyParser.json());
console.log("GMAIL_USER:", gmailUser);
console.log("GMAIL_PASS:", gmailPass);
app.get("/welcome", (req, res) => {
  res.send("Hello from the server!");
})
app.post("/contact", async (req, res) => {
  console.log("Request Body:", req.body); 
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser, 
      pass: gmailPass, 
    },
  });

  const mailOptions = {
    from: email,
    to: gmailUser,
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, message: "Message failed", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
