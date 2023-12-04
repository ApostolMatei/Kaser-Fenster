// functions/getToken.js
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

exports.handler = async function (event, context) {
  try {
    const code = event.queryStringParameters.code;
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URI;

    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    const { tokens } = await oAuth2Client.getToken(code);
    const tokenPath = path.join(__dirname, 'token.json');
    fs.writeFileSync(tokenPath, JSON.stringify(tokens));

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
};