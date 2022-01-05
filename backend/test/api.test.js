const request = require("supertest");

const app = require("../src/app");

describe("GET /api/v1", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/api/v1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          message: "API - 👋🌎🌍🌏",
        },
        done
      );
  });
});

describe("GET /api/v1/task", () => {
  it("get data from database expect to response with json", (done) => {
    request(app)
      .get("/api/v1/task")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /api/v1/task/random", () => {
  it("get random data expect to response with json", (done) => {
    request(app)
      .get("/api/v1/task/random")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("POST Create Task", () => {
  it("should create new task for the user", () => {
    const datas = {
      user_id: "test user_id",
      task: {
        task_id: "test task_id",
        task_name: "test task_name",
        task_content: "test task_content",
      },
    };

    request(app).post(datas).send({}).expect(201);
  });
});
