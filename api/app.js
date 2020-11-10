import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json());

//routes
const orderRoute = "../api/routes/order.js";
const productRoute = "../api/routes/product.js";
const userRoute = "../api/routes/user.js";

app.use("/user", userRoute);
app.use("/order", orderRoute);
app.use("/user", userRoute);

//connect to db
var uri =
  "mongodb+srv://aoguz:mdpREST_API_Abdullah@cluster0.4iup9.mongodb.net/<dbname>?retryWrites=true&w=majority";
var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(uri, options, () => {
  console.log("db bağlandı");
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

// listening
app.listen(5000, () => {
  console.log("3000 portu çalıştırıldı");
});
