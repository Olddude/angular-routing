const express = require('express');
const addLinks = require('../../../hal/add-links');

const router = express.Router();

const { baseUrl } = require('../../../../config');

router.get('', (req, res) => {
  const payload = addLinks({}, {
    self: { href: baseUrl + req.originalUrl },
    datapoint: { href: baseUrl + req.originalUrl + '/{id}', templated: true }
  });
  res.json(payload);
});

router.get('/:id', (req, res) => {
  const data = {
    id: req.params['id'],
    type: 'datapoint',
    value: Math.random(),
    date: new Date()
  };
  const payload = addLinks(data, {
    self: { href: baseUrl + req.originalUrl }
  })
  res.json(payload);
});

module.exports = router;
