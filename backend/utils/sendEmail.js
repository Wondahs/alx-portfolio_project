const nodemailer = require('nodemailer');
const mailchimp = require('@mailchimp/mailchimp_transactional')(process.env.MAILCHIMP_API_KEY);
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends an email using Nodemailer.
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} text - The content of the email.
 * @returns {Promise<void>} - A promise that resolves when the email is sent.
 */
const sendEmail = async (to, subject, text) => {
  if (process.env.USE_MAILCHIMP === 'true') {
    /* Use Mailchimp Transactional for sending emails */
    const message = {
      from_email: process.env.EMAIL_USER,
      subject: subject,
      text: text,
      to: [
        {
          email: to,
          type: 'to'
        }
      ]
    };

    try {
      await mailchimp.messages.send({ message });
      console.log('Email sent successfully using Mailchimp');
    } catch (error) {
      console.error('Error sending email using Mailchimp:', error);
    }
  } else {
    /* Use Nodemailer for sending emails */
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
    console.log('Email sent successfully using Nodemailer');
  }
};

module.exports = sendEmail;