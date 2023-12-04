const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');
const fs = require('fs');
const path = require('path');

exports.handler = async function (event, context) {
  try {
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URI;

    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    // Load the tokens from token.json
    const tokenPath = path.join(__dirname, 'token.json');
    const tokens = JSON.parse(await fs.promises.readFile(tokenPath, 'utf-8'));
    oAuth2Client.setCredentials(tokens);

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    const formData = JSON.parse(event.body); // Assuming form data is in JSON format
    const { name, email, message } = formData;

    console.log('Received form data:', formData);

    const fileAttachments = [];

    const toEmail = 'mateias109@gmail.com';

    const options = {
      to: toEmail,
      cc: '',
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
      html: `<p><b>New Contact Form Submission</b></p><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
      attachments: fileAttachments,
      textEncoding: 'base64',
      headers: [
        { key: 'X-Application-Developer', value: 'Amit Agarwal' },
        { key: 'X-Application-Version', value: 'v1.0.0.2' },
      ],
    };

    const mailComposer = new MailComposer(options);
    // Rest of your code for sending email...

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, messageId: id }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};