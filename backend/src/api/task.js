const express = require("express");
const faker = require("faker");
const data = require("../data/randomtask.json");
const router = express.Router();
const fs = require("fs");
const { stringify } = require("querystring");

const findUser = (name) => data.find((x) => x.name === name);

router.get("/random", (req, res) => {
  //random from 1 to 10
  var rand;
  var datagroup = [];
  var randomtask = faker.commerce.product();
  var randomcountry = faker.address.country();
  var randomip = faker.internet.ip();
  var domainName = faker.internet.domainName();
  var randomnumber;
  var price = faker.commerce.price();

  const task_date = Date.now();
  for (var i = 0; i < 3; i++) {
    rand = Math.floor(Math.random() * 5);
    randomnumber = Math.floor(Math.random() * 5);
    if (randomnumber == 0) {
      const task_content = "Buy " + randomtask + " in " + randomcountry;
      const datas = {
        user_id: rand,
        task: {
          task_id: task_date,
          task_name: "random task",
          task_content: task_content,
          task_date: task_date,
        },
      };
      datagroup.push(datas);
    } else if (randomnumber == 1) {
      const task_content1 = "Hack " + randomip + " in " + randomcountry;
      const datas1 = {
        user_id: rand,
        task: {
          task_id: task_date + 1,
          task_name: "random task",
          task_content: task_content1,
          task_date: task_date,
        },
      };
      datagroup.push(datas1);
    } else if (randomnumber == 2) {
      const task_content2 = "Call Toan Tran the full stack developer";
      const datas2 = {
        user_id: rand,
        task: {
          task_id: task_date + 2,
          task_name: "random task",
          task_content: task_content2,
          task_date: task_date,
        },
      };
      datagroup.push(datas2);
    } else if (randomnumber == 3) {
      const task_content3 = "Hack " + domainName;
      const datas3 = {
        user_id: rand,
        task: {
          task_id: task_date + 3,
          task_name: "random task",
          task_content: task_content3,
          task_date: task_date,
        },
      };
      datagroup.push(datas3);
    } else if (randomnumber == 4) {
      const task_content4 =
        "pay for " +
        randomtask +
        " ( bill: " +
        price +
        " $)" +
        " in " +
        randomcountry;
      const datas4 = {
        user_id: rand,
        task: {
          task_id: task_date + 4,
          task_name: "random task",
          task_content: task_content4,
          task_date: task_date,
        },
      };
      datagroup.push(datas4);
    }
  }
  res.send(datagroup);
});

router.get("./:name", (req, res) => {
  const name = stringify(req.params.name);
  console.log(`Test: ${findUser(req.params.name)} and ${req.params.name}`);
  res.send(name);
  return res.status(201).send({
    status: "success",
    data: findUser(name),
  });
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
  const user_id = req.body.user_id;
  const task_id = req.body.task.task_id;
  const task_name = req.body.task.task_name;
  const task_content = req.body.task.task_content;
  const task_date = Date.now();

  const datas = {
    user_id: user_id,
    task: {
      task_id: task_id,
      task_name: task_name,
      task_content: task_content,
      task_date: task_date,
    },
  };
  var fs = require("fs");
  fs.readFile("./src/data/randomtask.json", function (err, content) {
    if (err) throw err;
    var parseJson = JSON.parse(content);

    parseJson.push(datas);

    fs.writeFileSync(
      "./src/data/randomtask.json",
      JSON.stringify(parseJson),
      function (err) {
        if (err) throw err;
      }
    );

    /* res.send("add success!"); */
    res.send(datas);
  });
});

router.delete("/delete/:id", async (req, res) => {
  var fs = require("fs");
  fs.readFile("./src/data/randomtask.json", function (err, content) {
    if (err) throw err;
    var parseJson = JSON.parse(content);

    parseJson = parseJson.filter((x) => x.task.task_id != req.params.id);

    fs.writeFileSync(
      "./src/data/randomtask.json",
      JSON.stringify(parseJson),
      function (err) {
        if (err) throw err;
      }
    );

    /* res.send("add success!"); */
    /* res.send("delete success"); */
  });

  res.send("delete success");
});

router.put("/update/:id", async (req, res) => {
  var fs = require("fs");
  fs.readFile("./src/data/randomtask.json", function (err, content) {
    if (err) throw err;
    var parseJson = JSON.parse(content);

    const item = parseJson.find((item) => item.task.task_id == req.params.id);

    if (item) {
      var fourdigit =
        item.task.task_id[0] +
        item.task.task_id[1] +
        item.task.task_id[2] +
        item.task.task_id[3];
      if (fourdigit != "done") {
        item.task.task_id = "done-" + req.params.id;
      } else {
        {
          item.task.task_id = item.task.task_id.substring(5);
        }
      }
      res.send(item.task.task_id);
    }
    fs.writeFileSync(
      "./src/data/randomtask.json",
      JSON.stringify(parseJson),
      function (err) {
        if (err) throw err;
      }
    );

    /* res.send("add success!"); */
    /* res.send("delete success"); */
  });
});
module.exports = router;
