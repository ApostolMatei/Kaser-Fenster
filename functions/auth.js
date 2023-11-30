const { google } = require('googleapis');

// Replace with your client ID, redirect URI, and desired scopes
const clientId = '245558044112-nfepgg3911uergvq6vrkpli86886bnm8.apps.googleusercontent.com';
const redirectUri = 'https://kaser-fenster.at/kontakt';
const scopes = ['https://www.googleapis.com/auth/gmail.send'];

const oAuth2Client = new google.auth.OAuth2(clientId, '', redirectUri);

// Generate the URL for user consent
const authorizeUrl = oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

console.log('Authorize this app by visiting this URL:', authorizeUrl);