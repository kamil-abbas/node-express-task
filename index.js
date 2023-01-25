const express = require("express");
const app = express();

let products = [
  { id: 1, name: "alma", price: 2, amount: 27 },
  { id: 2, name: "armud", price: 5, amount: 15 },
  { id: 3, name: "heyva", price: 7, amount: 12 },
  { id: 4, name: "gilas", price: 3, amount: 8 },
  { id: 5, name: "banan", price: 4, amount: 30 },
  { id: 6, name: "ananas", price: 5, amount: 24 },
  { id: 7, name: "manqo", price: 8, amount: 19 },
  { id: 8, name: "albali", price: 3, amount: 56 },
  { id: 9, name: "nar", price: 4, amount: 40 },
  { id: 10, name: "gavali", price: 2, amount: 14 },
];

app.get("/", (req, res) => {
  res.send(products);
});

app.get("/product/:id", (req, res) => {
  const idOfProduct = parseInt(req.params.id);
  const product = products.find((product) => product.id === idOfProduct);
  if (!product) {
    res.status(404).send();
  }
  res.status(200).json(product);
});

app.get("/product", (req, res) => {
  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  res.send({ products: products.slice(offset, offset + count) });
});

app.listen(3000, () => {
  console.log("3000 port is being used");
});
