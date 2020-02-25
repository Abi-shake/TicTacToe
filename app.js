const express = require("express");
const app = express();
const ejs = require("ejs");
var emoji = require("node-emoji");
let port = process.env.PORT || 5000;

// set
app.set("view enginer", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    heart: emoji.get("heart"),
    brain: emoji.get("brain")
  });
});
app.post("/start-game", (req, res) => {
  const userChoice = req.body.input;
  let firstPlayer = req.body.player1name;
  let secondPlayer = req.body.player2name;

  if (req.body.cpu !== undefined) {
    firstPlayer = "Player";
    secondPlayer = "Cpu";
  }

  res.render("game.ejs", {
    player1name: firstPlayer,
    player1sign: emoji.random().emoji,
    player2name: secondPlayer,
    player2sign: emoji.random().emoji,
    radioPlayer: req.body.player,
    radioCpu: req.body.cpu
  });
});
app.listen(port);
