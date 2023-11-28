
const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    const formData = JSON.parse(event.body);

    // Process the form data (you can customize this part)

    // Send email
    await sendEmail(formData);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

async function sendEmail(formData) {
  // Replace these with your Gmail SMTP credentials
  const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: 'office@kaser-fenster.at',
      pass: 'achimPAUL31558486',
    },
  };

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport(smtpConfig);

  // Email content
  const mailOptions = {
    from: 'your@gmail.com',
    to: 'recipient@example.com',
    subject: 'New Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };

  // Send email
  await transporter.sendMail(mailOptions);
}