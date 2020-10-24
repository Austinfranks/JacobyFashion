const express = require("express");
const app = express();

const port = 3001;

//jfloginsystem
const mysql = require("mysql");
const cors = require("cors");

// automatically parses every json object from front end
app.use(express.json());
app.use(cors());

// DOT ENV PASSWRD
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "jfloginsystem",
});

// Makes a query to the database
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username, password) VALUES (?,?)",
    [username, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("running server");
});
