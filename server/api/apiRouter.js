/* eslint new-cap:0 */

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const search = require('./routes/search');

router.use(bodyParser.json({
  type: '*/*',
}));

router.post('/search', search);

module.exports = router;
