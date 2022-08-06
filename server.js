// dependencies
const express = require('express');
const fs = require('fs');
const path = require('path'); 


// start the server
const app = express();
// if port is any route or 3001
const PORT = process.env.PORT || 3001;



// parse incoming data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON
app.use(express.json());
//link to assets!
app.use(express.static('public'));

//route that sends the user to the index page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

//route that sends the user to the notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// route that sends the user the db.json file
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "db.json"));
});

// route to index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
  