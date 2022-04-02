const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const bodyParser = require("body-parser");        //tells our app what sort of request it should respond to
const User = require("./models/User");

mongoose
  .connect(db, { useNewUrlParser: true })       //returns a promise
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

//middlewares for body parser
app.use(bodyParser.urlencoded({ extended: false }));    //tell our app to respond to other software like postman
app.use(bodyParser.json());     //tell our app to respond to json request

app.get("/", (req, res) => {        //root
  // const user = new User({
  //   handle: "jim",
  //   email: "jim@mail.com",
  //   password: "password"
  // })
  // user.save();
  res.send("Hello World!");
});

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;    //if we are in production use this port for heroku else localhost:5000

app.listen(port, () => console.log(`Server is running on port ${port}`));