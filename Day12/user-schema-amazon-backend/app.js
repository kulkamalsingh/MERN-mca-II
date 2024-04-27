const express = require("express");
const productsRouter = require("./routes/productsRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const app = express();
const mongoose = require("mongoose");
const test = require("./models/productsModels.js");

app.use(express.json());
app.use("/api/products", productsRouter);
app.use("/api/user", userRouter); 
const url =
    "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.pf66ncn.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0";
const dbUser = "kulkamalsingh";
const dbPass = "kamal123";
const dbName = "Amazon-Backend";

let dbLink = url.replace("$_USERNAME_$", dbUser);
dbLink = dbLink.replace("$_PASSWORD_$", dbPass);
dbLink = dbLink.replace("$_DB_NAME_$", dbName);

mongoose.connect(dbLink).then(() => console.log("______DB connected_____"));

app.listen(1400, () => {
  console.log("http://localhost:1400");
});
