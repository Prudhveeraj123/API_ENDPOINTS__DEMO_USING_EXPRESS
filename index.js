import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Welcome, here is a demo for using API endpoints");
});

app.get("/about", (req, res) => {
  res.send("I am Prudhveeraj Botta, CS Grad");
});

app.get("/contact", (req, res) => {
  res.send("Email:prudhveeraj167754@gmail.com");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
