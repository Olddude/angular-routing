const express = require('express');
const addLinks = require('../../hal/add-links');

const router = express.Router();

const { baseUrl } = require('../../../config');

router.use('/datacontainers', require('./datacontainers'));
router.use('/datapoints', require('./datapoints'));

router.get('', (req, res) => {
  const payload = addLinks({}, {
    self: { href: baseUrl + req.originalUrl },
    datacontainers: { href: baseUrl + req.originalUrl + '/datacontainers' },
    datapoints: { href: baseUrl + req.originalUrl + '/datapoints' }
  });
  res.json(payload);
});

module.exports = router;
