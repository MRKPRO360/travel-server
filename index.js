const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const travels = require("./data/travels.json");
const books = require("./data/books.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/travels", (req, res) => {
  res.send(travels);
});

app.get("/travels/:id", (req, res) => {
  const id = +req.params.id;

  const travel = travels.find((el) => el.id === id);
  res.send(travel);
});

app.get("/books/:id", (req, res) => {
  const id = +req.params.id;

  const book = books.find((el) => el.id === id);
  res.send(book);
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

// live link: https://new-travel-server.vercel.app/
