import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  if (req.query.name) {
    res.status(200).send(`Hello ${req.query.name}`);
  } else {
    res.status(400).end();
  }
});

test("Test response status", async () => {
  let res = await request(app).get("/").query({ name: "John" });
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello John");

  res = await request(app).get("/");
  expect(res.status).toBe(400);
});