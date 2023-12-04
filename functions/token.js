// token.js
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// Replace with the code you received from Google
const code = '4/0AfJohXku1pKr6JJVC45UYtdPR9IinrI64P5OniZeChmszXP2cAy1PiYeBwRCDIKp2jFEWA';
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

exports.handler = async function (event, context) {
  try {
    const code = event.queryStringParameters.code;
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URI;

    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    try {
      const { tokens } = await oAuth2Client.getToken(code);
      const tokenPath = path.join(__dirname, 'token.json');
      fs.writeFileSync(tokenPath, JSON.stringify(tokens));
      console.log('Access token and refresh token stored to token.json');

      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, tokens }),
      };
    } catch (error) {
      console.error('Error getting token:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: error.message }),
      };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};