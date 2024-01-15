const express = require('express');
const route = require('./controller/controller');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(express.json());
app.use('/user', route);

app.use((error, req, res, _next) => res.status(500).send(error.message));

module.exports = app;
