const express = require('express');
const fs = require('fs');
const path = require('path'); 

// if port is any route or 3001
const PORT = process.env.PORT || 3001;

// start the server
const app = express();
