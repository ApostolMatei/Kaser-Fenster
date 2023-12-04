// functions/sendEmail.js
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
    const tokens = JSON.parse(fs.readFileSync(tokenPath, 'utf-8'));
    oAuth2Client.setCredentials(tokens);

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

     
    const toEmail = 'mateias109@gmail.com';

    const options = {
      to: toEmail,
      cc: '',
      replyTo: toEmail,
      subject: 'Test Email',
      text: 'This is a test email.',
      html: '<p>This is a test email.</p>',
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
