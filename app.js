const express = require("express");
const path = require("path");
const app = express();
const testRouter = require("./routers/test.router");
const apikeyRouter = require("./routers/apikey.router");
const cors = require("cors");
const userRouter = require("./routers/user.router");
const togeminiRouter = require("./routers/togemini.router");
const scrapeRouter = require("./routers/scrape.router");

const PORT = process.env.PORT || 5001;

app.use(express.json({ limit: "10mb" }));

app.use((req, res, next) => {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");
  next();
});

app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/test", testRouter);
app.use("/api/apikey", apikeyRouter);
app.use("/api/user", userRouter);
app.use("/api/scrape", scrapeRouter);
app.use("/api/togemini", togeminiRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log("Server running on " + PORT));
