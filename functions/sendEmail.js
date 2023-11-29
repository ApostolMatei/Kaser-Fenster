// netlify-functions/sendEmail.js
const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');

exports.handler = async function (event, context) {
  try {
    const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN,} = process.env;

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });



    const fileAttachments = [];

    const options = {
      to: 'office@kaser-fenster.at',
      cc: '',
      replyTo: 'mateias109@gmail.com',
      subject: 'Hello Amit 🚀',
      text: 'This email is sent from the command line',
      html: `<p>🙋🏻‍♀️  &mdash; This is a <b>test email</b> from <a href="https://digitalinspiration.com">Digital Inspiration</a>.</p>`,
      attachments: fileAttachments,
      textEncoding: 'base64',
      headers: [
        { key: 'X-Application-Developer', value: 'Amit Agarwal' },
        { key: 'X-Application-Version', value: 'v1.0.0.2' },
      ],
    };

    // Continue with the rest of your logic...

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, messageId }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
}}