const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('./config')

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((_req, res, next) => {
  res.setHeader('Content-Type', 'application/hal+json');
  next();
});

app.use('/v1', require('./app/routes/v1'));

app.use((req, res) => {
  const payload = { errors: [`route not found: ${req.originalUrl}`] };
  res.status(404);
  res.json(payload);
});

app.listen(config.port, config.host, () => {
  console.log(`listening on ${config.baseUrl}...`);
});
