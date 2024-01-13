// calling the main Gemini API

const testSQL = async () => {
  try {
    console.log("testSQL");
    return "queryResult";
  } catch (err) {
    console.log(err);
    return err;
  }
};

// module.exports = { createUser, getMId, validateUser, readUser };
module.exports = { testSQL };
