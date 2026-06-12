import express from "express";
import request from "supertest";

const app = express();

app
  .route("/")
  .get((req, res) => {
    res.send("Hello get Response");
  })
  .post((req, res) => {
    res.send("Hello post Response");
  })
  .put((req, res) => {
    res.send("Hello put Response");
  });

test("Test route function", async () => {
  let res = await request(app).get("/");
  expect(res.text).toBe("Hello get Response");

  res = await request(app).post("/");
  expect(res.text).toBe("Hello post Response");

  res = await request(app).put("/");
  expect(res.text).toBe("Hello put Response");
});
