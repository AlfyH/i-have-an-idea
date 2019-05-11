const express = require('express'); //how to set up as env?
var json = require('./service-account-file.json');
const routes = require('./routes/route');
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
var admin = require('firebase-admin');
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");
require("firebase/database");


const app = express();
const port = process.env.PORT || 3001;

var defaultApp = admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://i-have-an-idea.firebaseio.com'
});

var defaultAuth = admin.auth();
// var defaultDatabase = admin.database();
console.log(defaultApp);

app.use('/', routes);

app.listen(port, () => {
  console.log(`----App ready----`);
});
