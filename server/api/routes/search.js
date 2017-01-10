const fetch = require('node-fetch');

function getVenues(authCode, location, offset) {
  const url = `https://api.yelp.com/v3/businesses/search?term=bar&location=${location}&offset=${offset}`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authCode}`,
    },
  };
  return fetch(url, options)
    .then((response) => response.json())
    .then((response) => response)
    .catch(() => {
      throw new Error('failed to fetch data');
    });
}

module.exports = (req, res) => {
  const authCode = req.app.get('authCode');
  const location = req.body.location;
  const offset = req.body.offset;
  getVenues(authCode, location, offset)
    .then((response) => {
      res.json(response);
    })
    .catch(() => {
      res.status(503).send('yelp connection error').end();
    });
};
