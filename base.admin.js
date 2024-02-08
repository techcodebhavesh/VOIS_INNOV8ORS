const serviceAccount = require("./path/to/serviceAccountKey.json");
const admin = require("firebase-admin");
var serviceAccount = require(__dirname + "/service-account-2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = admin.firestore();
