const express = require("express");
const app = express();
const ejs = require("ejs");
let port = process.env.PORT || 5000;

// set
app.set("view enginer", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/start-game", (req, res) => {
  const userChoice = req.body.input;
  res.render("game.ejs", {
    player1name: req.body.player1name,
    player1sign: "X",
    player2name: req.body.player2name,
    player2sign: "O"
  });
});

//8 winning moves are there

app.listen(port);
