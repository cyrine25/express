const express = require("express");

const app = express();
const PORT = 5000;

function logger(req, res, next) {
  var date = new Date();
  var today = date.getDay();
  var time = date.getHours();
  console.log(today);
  console.log(time);
  if (1 <= today && today <= 5  && 9 <=time && time <= 17) {
    next();
  } else {
    res.send("we are not working now come back later");
  }
}
app.use(logger);
app.get("/index.html", (req, res) => {
  res.sendFile(__dirname + "/component/index.html");
});
app.get("/Services.html", (req, res) => {
  res.sendFile(__dirname + "/component/Services.html");
});
app.get("/contact.html", (req, res) => {
  res.sendFile(__dirname + "/component/contact.html");
});

app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(`the server is running on port ${PORT}`)
);
