const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (event, context) {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const msg = {
      to: 'office@kaser-fenster.com', // Replace with your desired recipient email address
      from: 'sender@example.com',   // Replace with your SendGrid verified sender email address
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      html: `<p><b>Contact Form Submission</b></p><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
    };

    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};