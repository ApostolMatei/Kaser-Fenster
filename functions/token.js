// token.js
const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');

// Replace with the code you received from Google
const code = '4/0AfJohXku1pKr6JJVC45UYtdPR9IinrI64P5OniZeChmszXP2cAy1PiYeBwRCDIKp2jFEWA';
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

console.log(clientId, clientSecret);

const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

oAuth2Client.getToken(code)
  .then(({ tokens }) => {
    const tokenPath = path.join(__dirname, 'token.json');
    fs.writeFileSync(tokenPath, JSON.stringify(tokens));
    console.log('Access token and refresh token stored to token.json');
  })
  .catch((error) => {
    console.error('Error getting token:', error);
  });