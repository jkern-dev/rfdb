const express = require('express');
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const questions = require("./routes/api/questions");
const answers = require("./routes/api/answers");
const bodyParser = require('body-parser');
const passport = require('passport');

mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log("connected to Mongo"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello RFDB!");
});

app.use("/api/users", users);
app.use("/api/questions", questions);
app.use("/api/answers", answers);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});