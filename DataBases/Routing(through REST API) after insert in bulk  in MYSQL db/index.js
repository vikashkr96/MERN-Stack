const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
let app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

let port = 8080;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "1234"
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// Home Route....
app.get("/", (req, res) => {
  let q = `SELECT count(*) FROM user`;

  connection.query(q, (err, result) => {
    if (err) {
      console.error("DB Error:", err.message);
      res.send("Some error occured! ");

    }
    count = result[0]["count(*)"];
    res.render("home.ejs", { count });
  });
});

// Show Route .....
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;

  connection.query(q, (err, users) => {
    if (err) {
      console.error("DB Error:", err.message);
      return res.send("Some error occured!");
    }
    res.render("showUsers.ejs", { users });
  });
});

// Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id ="${id}"`;

  connection.query(q, (err, result) => {
    if (err) {
      console.error("DB Error:", err.message);
      res.send("Some error occured! ");
    };
    let user = result[0];
    res.render("edit.ejs", { user });
  });
});

// Update route (in db)
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;

  let selectQuery = `SELECT * FROM user WHERE id = ?`;

  connection.query(selectQuery, [id], (err, result) => {
    if (err) return res.send("DB error");

    let user = result[0];

    if (!user) {
      return res.send("User not found");
    }

    if (formPass !== user.password) {
      return res.send("Wrong password!");
    }

    let updateQuery = `UPDATE user SET username = ? WHERE id = ?`;

    connection.query(updateQuery, [newUsername, id], (err) => {
      if (err) return res.send("Update failed");

      res.redirect("/user");
    });
  });
});





app.listen(port, () => {
  console.log("Server started running ");
});

