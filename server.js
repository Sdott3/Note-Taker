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

//GET /notes 
const { notes } = require('./data/db.json');

//should return the notes.html file.
function createNewNotes(body, )

//GET * should return the index.html file.

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
  