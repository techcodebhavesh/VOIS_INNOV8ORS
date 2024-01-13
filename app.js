const express = require("express");
const path = require("path");
const app = express();
const testRouter = require("./routers/test.router");
const cors = require("cors");

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/test", testRouter);

app.listen(PORT, () => console.log("Server running on " + PORT));