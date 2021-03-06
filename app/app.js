'use strict';

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/public', express.static('public'));

const pullipi = require('./src/apis/pullipi');

app.use('/api/pullipi', pullipi);

module.exports = app;
