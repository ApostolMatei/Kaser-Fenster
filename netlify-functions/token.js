// token.js
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// Replace with the code you received from Google
const code = '4/0AfJohXknUY2e2cY95XBn1ibRMHacuCFpBs95joM_UArg70hgNQL5hfhyT3IQH-hfNvwsUg';
const clientId = process.env.client_id;
const clientSecret = process.env.client_secret;
const redirectUri = process.env.redirect_uris;

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

oAuth2Client.getToken(code).then(({ tokens }) => {
  const tokenPath = path.join(__dirname, 'token.json');
  fs.writeFileSync(tokenPath, JSON.stringify(tokens));
  console.log('Access token and refresh token stored to token.json');
});
