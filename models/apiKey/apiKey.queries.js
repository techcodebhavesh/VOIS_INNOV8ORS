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
    data.id = snapshot.docs[0].id;
    data.apiCalled += 1;
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    if (success) {
      data.apiCalledSuccess += 1;
      data.success.push({
        apiCalledSuccess: data.apiCalledSuccess,
        timestamp: formatter.format(new Date()),
      });
    }
    if (failed) {
      data.apiCalledFails += 1;
      data.fails.push({
        apiCalledFails: data.apiCalledFails,
        timestamp: formatter.format(new Date()),
      });
    }
    snapshot.docs[0].ref.update(data);
    return 1;
  }
}

module.exports = {
  searchApiKey,
  incrementAPICallCount,
};
