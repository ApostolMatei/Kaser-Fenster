// functions/sendEmail.js
const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');

exports.handler = async function (event, context) {
  try {
    const apiKey = process.env.GMAIL_API_KEY;
    const gmail = google.gmail({ version: 'v1', auth: apiKey });

    const toEmail = 'office@kaser-fenster.at'; // Use your desired recipient email address

    const options = {
      to: toEmail,
      cc: '',
      replyTo: toEmail,
      subject: 'Contact Form Submission',
      text: `Name: ${event.body.name}\nEmail: ${event.body.email}\n\nMessage: ${event.body.message}`,
      html: `<p><b>Contact Form Submission</b></p><p><b>Name:</b> ${event.body.name}</p><p><b>Email:</b> ${event.body.email}</p><p><b>Message:</b> ${event.body.message}</p>`,
    };

    const mailComposer = new MailComposer(options);
    const messageContent = await mailComposer.compile().build();
    const rawMessage = Buffer.from(messageContent).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    const { data: { id } } = await gmail.users.messages.send({
      userId: 'me',
      resource: {
        raw: rawMessage,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, messageId: id }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};