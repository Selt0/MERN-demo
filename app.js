// To load an ES module, set "type": "module" in the package.json or use the .mjs extension || Or you will get error
// if you have 'type' set to 'module'. you cannot use 'require()' aka old method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

// import express to create server
// const express = require('express'); // <- old style
// import express from 'express'; // <- ES6 new method

// import mongoose to connect database
// const mongoose = require('mongoose');  // <- old style
// import mongoose from 'mongoose'; // <- ES6 new method

// import your key to connect database || keys.js
// const db = require('./config/keys').mongoURI;  // <- old method
// import { object or value } from 'file location';  <- ES6 new method

// import { mongoURI } from '/config/keys.js';
// const db = mongoURI;

// instead of saving the object as a variable: const db = mongoURI
// we can create db as the alias for  mongoURI
// import { value as alias } from 'file location';
// import { mongoURI as db } from '/config/keys.js';

import express from 'express';
import mongoose from 'mongoose';
import { mongoURI as db } from '/config/keys.js';
const app = express();
// const db = mongoURI; // <- uses key to connect to DB

// connect to MongoDB using mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));

// basic route | homepage
app.get('/', (req, res) => res.send('I am KING!'));

// tells app which port to run (heroku = process.env.PORT | localhost:5000)
const port = process.env.PORT || 5000;

// tell express to start a socket and listen for connections
app.listen(port, () => console.log(`Server is running on port ${port}`));

// When you make changes, notice that the app doesn't update unless you restart the server || 'node app'
// we can use 'nodeman' to watch for changes and update

// in package.json you will notice the following script :
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1"
// }
// we don't need it, just delete and replace with
// "scripts": {
//   "start": "node app.js",
//   "server": "nodemon app.js"
// }

// Running npm run start will accomplish the same result as 'node app'
// However, if you instead run `npm run server`, thanks to nodemon,
// you'll notice that the server will automatically restart on changes and log a success message.
// Once you refresh the web page your changes will be reflected successfully.
