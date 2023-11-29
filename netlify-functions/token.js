// token.js
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// Replace with the code you received from Google
const code = '4/0AfJohXknUY2e2cY95XBn1ibRMHacuCFpBs95joM_UArg70hgNQL5hfhyT3IQH-hfNvwsUg';
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.ACCESS_TOKEN;
console.log(clientId );
console.log(clientSecret );
console.log(redirectUri );


const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

oAuth2Client.getToken(code).then(({ tokens }) => {
  const tokenPath = path.join(__dirname, 'token.json');
  fs.writeFileSync(tokenPath, JSON.stringify(tokens));
  console.log('Access token and refresh token stored to token.json');
});
