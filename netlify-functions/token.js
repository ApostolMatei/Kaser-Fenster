// token.js
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs/promises');

const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, ACCESS_TOKEN_FILE } = process.env;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

// Replace with the code you received from Google
const code = '4/0AfJohXknUY2e2cY95XBn1ibRMHacuCFpBs95joM_UArg70hgNQL5hfhyT3IQH-hfNvwsUg';

// If you have an access token, set it directly
if (ACCESS_TOKEN_FILE) {
  oAuth2Client.setCredentials({ access_token: ACCESS_TOKEN_FILE });
  console.log('Access token set directly');
} else {
  // If you don't have an access token, exchange the authorization code for tokens
  oAuth2Client.getToken(code).then(({ tokens }) => {
    // Save the access token to a file
    return fs.writeFile(path.join(__dirname, 'access_token.txt'), tokens.access_token);
  }).then(() => {
    console.log('Access token stored in access_token.txt');
  }).catch(error => {
    console.error('Error:', error);
  });
}