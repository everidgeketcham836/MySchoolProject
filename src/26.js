var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle user login
app.post('/login', (req, res) => {
  // Your logic for user login here...
});

// Start the server
app.listen(3000);
