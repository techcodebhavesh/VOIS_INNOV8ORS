const express = require("express");
const path = require("path");
const app = express();
const testRouter = require("./routers/test.router");
const apikeyRouter = require("./routers/apikey.router");
const cors = require("cors");
const userRouter = require("./routers/user.router");
const productRouter = require("./routers/product.router");
const geminirunRouter = require("./routers/geminirun.router");
const fireindiRouter = require("./routers/fireindi.router");
const togeminiRouter = require("./routers/togemini.router");
const transportRouter = require("./routers/transport.router");

const PORT = process.env.PORT || 5001;

app.use(express.json({ limit: "10mb" }));

app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/test", testRouter);
app.use("/api/apikey", apikeyRouter);

app.use("/api/user", userRouter);

app.use("/api/product", productRouter);
app.use("/api/geminirun", geminirunRouter);

app.use("/api/fireindi", fireindiRouter);

app.use("/api/togemini", togeminiRouter);

app.use("/api/transport", transportRouter);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "hello.html"));
});

app.listen(PORT, () => console.log("Server running on " + PORT));
