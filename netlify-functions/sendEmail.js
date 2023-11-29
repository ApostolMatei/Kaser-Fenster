const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');

exports.handler = async function (event, context) {
  try {
    const clientId = process.env.client_id;
const clientSecret = process.env.client_secret;
const redirectUri = process.env.redirect_uris;
  const refreshToken = process.env.access_token;

    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
    oAuth2Client.setCredentials({ refresh_token: refreshToken });

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    const formData = JSON.parse(event.body); // Assuming form data is in JSON format
    const { name, email, message } = formData;

    const fileAttachments = [];

    const options = {
      to: 'office@kaser-fenster.at',
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