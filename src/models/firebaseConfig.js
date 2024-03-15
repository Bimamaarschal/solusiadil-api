const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('../../keys/serviceAccountKey.json');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://solusiadil-9659c-default-rtdb.firebaseio.com/"
});

module.exports = firebaseAdmin;
