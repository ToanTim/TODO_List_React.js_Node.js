const express = require("express");
const faker = require("faker");
const data = require("../data/randomtask.json");
const router = express.Router();
const fs = require("fs");

router.get("/random", (req, res) => {
  var randomtask = faker.commerce.product();
  var randomcountry = faker.address.country();
  var randomip = faker.internet.ip();
  var domainName = faker.internet.domainName();
  var randomnumber = Math.floor(Math.random() * 5);
  var price = faker.commerce.price();
  if (randomnumber == 0) {
    res.send("Buy " + randomtask + " in " + randomcountry);
  } else if (randomnumber == 1) {
    res.send("Hack " + randomip + " in " + randomcountry);
  } else if (randomnumber == 2) {
    res.send("Call Toan Tran the full stack developer");
  } else if (randomnumber == 3) {
    res.send("Hack " + domainName);
  } else if (randomnumber == 4) {
    res.send(
      "pay for " +
        randomtask +
        " ( bill: " +
        price +
        " $)" +
        " in " +
        randomcountry
    );
  }
});

router.get("/", (req, res) => {
  fs.readFile("./src/data/randomtask.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
});

router.post("/addtask", (req, res) => {
  const id = req.body.id;
  const task = req.body.task;

  var fs = require("fs");
  fs.readFile("./src/data/randomtask.json", function (err, content) {
    if (err) throw err;
    var parseJson = JSON.parse(content);

    parseJson.push({ id: id, Task: task });

    fs.writeFileSync(
      "./src/data/randomtask.json",
      JSON.stringify(parseJson),
      function (err) {
        if (err) throw err;
      }
    );

    res.send("add success!");
  });
});

module.exports = router;
