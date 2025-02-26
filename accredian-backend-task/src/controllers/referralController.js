import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const createReferral = async (req, res) => {
  try {
    const {
      referrerName,
      referrerEmail,
      referralName,
      referralEmail,
      courseTitle,
      courseLink,
      description,
    } = req.body;

    const newReferral = await prisma.referral.create({
      data: req.body,
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: referralEmail,
      subject: `Referral Invitation for ${courseTitle}`,
      text: `Hello ${referralName},

You have been referred by ${referrerName} (${referrerEmail}) for the course "${courseTitle}".

Course Link: ${courseLink}

${description ? "Message: " + description : ""}

Best regards,
Your Team`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res
      .status(201)
      .json({
        message: "Referral saved and email sent successfully!",
        newReferral,
      });
  } catch (error) {
    console.error("Error creating referral:", error);
    res.status(500).json({ error: error.message });
  }
};
