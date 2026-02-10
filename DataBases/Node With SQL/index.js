const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password : "1234"
});

connection.query("SHOW TABLES", (err, result) => {
    if (err) {
        console.error("DB Error:", err.message);
        return;
    }
    console.log(result);
});

connection.end();

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

// console.log(getRandomUser()); 




