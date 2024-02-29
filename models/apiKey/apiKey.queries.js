const { db } = require("../../connection.firebase");

async function searchApiKey(apiKey) {
  const usersRef = db.collection("users");
  const snapshot = await usersRef.where("apiKey", "==", apiKey).get();
  if (snapshot.empty) {
    return 0;
  } else {
    return 1;
  }
}

async function incrementAPICallCount(apiKey, success, failed) {
  const usersRef = db.collection("users");
  const snapshot = await usersRef.where("apiKey", "==", apiKey).get();
  if (snapshot.empty) {
    return 0;
  } else {
    // console log the first document
    const data = snapshot.docs[0].data();
    data.id = apiKey;
    data.apiCalled += 1;
    if (success) data.apiCalledSuccess += 1;
    if (failed) data.apiCalledFails += 1;
    snapshot.docs[0].ref.update(data);
    return 1;
  }
}

module.exports = {
  searchApiKey,
  incrementAPICallCount,
};
