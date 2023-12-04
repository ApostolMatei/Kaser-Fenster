const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

exports.handler = async function (event, context) {
  try {
    const code = event.queryStringParameters.code;
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URI;

    const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    try {
      const { tokens } = await oAuth2Client.getToken(code);

      // Specify the path to the token.json file
      const tokenPath = path.join(__dirname, 'token.json');

      // Ensure the directory exists
      const directory = path.dirname(tokenPath);
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
      }

      // Write the tokens to the file
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