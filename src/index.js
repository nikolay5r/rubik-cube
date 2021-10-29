const express = require('express');
const setupServer = require('./config/expressConfig')

const app = express();

setupServer(app);