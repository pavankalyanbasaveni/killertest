import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const server = express();
server.use(express.json());
server.use(cors("*"));

server.get("/", (req, res) => {
  res.send("hello world!");
});
server.post("/mail", (req, res) => {
  console.log(req.body);
  const { email, msg, name } = req.body;

  // Create a transporter
  const mailTransporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: "basaveni@zohomail.in",
      pass: "ZohoHunter@20",
    },
  });

  // Email options
  const mailOptions = {
    from: "basaveni@zohomail.in",
    to: email,
    subject: "testing with mail",
    text: msg,
  };

  // Send email
  mailTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
      res.status(400).json({ status: "error" });
    } else {
      console.log("Email sent:", info.response);
      res.json({
        status: "ok",
        info: info,
      });
    }
    return;
  });
});
server.listen(3000, () => {
  console.log("server running at 3000");
});
