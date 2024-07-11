const express = require("express");
const app = express();
const port = 4200;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT,PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.static("content"));

app.use(express.json());

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}...`);
});
