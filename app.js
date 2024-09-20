const express = require("express");
const app = express();
const morgan = require("morgan");
const serverless = require("serverless-http");
const router = express.Router();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set up logging middleware
app.use(morgan('dev'));

// Home route
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

// Use the router
app.use('/.netlify/functions/app', router);


module.exports.handler = serverless(app);
