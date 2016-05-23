var express = require('express');
var app = express();

var firebase = require("firebase");
var user = "0";

firebase.initializeApp({
  serviceAccount: "serviceAccountCredentials.json",
  databaseURL: "https://databaseName.firebaseio.com"
});

var token = firebase.auth().createCustomToken(user);

process.stdout.write("token: " + token);