const express = require('express');
const fs = require('fs');
const path = require('path'); 

// if port is any route or 3001
const PORT = process.env.PORT || 3001;

// start the server
const app = express();

// parse incoming data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON
app.use(express.json());
// Pparse middleware for public files
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
  