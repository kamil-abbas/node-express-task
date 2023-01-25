const express = require("express");
const app = express();
const path = require("path");

let users = [
  { "id": 1, "name": "Orxan", "age": 27 },
  { "id": 2, "name": "Saleh", "age": 25 },
  { "id": 3, "name": "Murad", "age": 28 },
  { "id": 4, "name": "Turan", "age": 24 },
  { "id": 5, "name": "Samir", "age": 23 }
];

app.get("/", (req, res) => {
  res.send(users);
});

app.get("/json", (req, res) => {
  res.sendFile(path.join(__dirname,"./data.json"))
});

app.listen(3000, () => {
  console.log("3000 port is being used");
});
