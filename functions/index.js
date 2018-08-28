const functions = require('firebase-functions');
const create_user = require('./create_user');
const admin = require("firebase-admin");
const serviceAccount = require("./private_key.json");
const requestOnetimePassword = require('./request_one_time_password');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-e2fc5.firebaseio.com"
  });
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
exports.createUser = functions.https.onRequest(create_user);
exports.requestOnetimePasswords = functions.https.onRequest(requestOnetimePassword);

