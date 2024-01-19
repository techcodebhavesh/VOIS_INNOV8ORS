const express = require("express");
const path = require("path");
const app = express();
const testRouter = require("./routers/test.router");
const apikeyRouter = require("./routers/apikey.router");
const cors = require("cors");
const userRouter = require("./routers/user.router");
const productRouter = require("./routers/product.router");

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api/test", testRouter);
app.use("/api/apikey", apikeyRouter);

app.use("/api/user", userRouter);

app.use("/api/product", productRouter);


app.listen(PORT, () => console.log("Server running on " + PORT));
