const querystring = require('querystring');
const fetch = require('node-fetch');

function getAuthCode() {
  const config = {
    client_id: 'MuX7KWBNcZumojnAktebbg',
    client_secret: 'ziliLloZfQzsuQQORMMmx57reKTDwgdMo3cv2PabaZXi6PF95FxHzPZ6DT2g6zW1',
    grant_type: 'oauth2',
  };
  const formData = querystring.stringify(config);
  const contentLength = formData.length;
  const options = {
    method: 'POST',
    headers: {
      'Content-Length': contentLength,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  };

  return fetch('https://api.yelp.com/oauth2/token', options)
        .then((data) => data.json())
        .then((data) => data);
}

module.exports = getAuthCode();
