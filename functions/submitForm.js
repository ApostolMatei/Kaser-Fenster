
const { google } = require('googleapis');
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
    const oAuth2Client = new google.auth.OAuth2(
        '245558044112-ibd9rh7n0bj316n2qjr7m5vergleichb60rdn4.apps.googleusercontent.com',
        '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',
        'https://kaser-fenster.at/kontakt'
      );
      
      oAuth2Client.setCredentials({
        refresh_token: '',
      });
      
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'office@kaser-fenster.at',
          clientId: '245558044112-ibd9rh7n0bj316n2qjr7m5vergleichb60rdn4.apps.googleusercontent.com',
          clientSecret: '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',
          refreshToken: '',
          accessToken: oAuth2Client.getAccessToken(),
        },
      });

  // Send email
  await transporter.sendMail(mailOptions);
}