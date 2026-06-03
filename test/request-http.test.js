import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});

test("Test ExpressJS", async () => {
  const res = await request(app).get("/").query({ name: "World" });
  expect(res.text).toBe("Hello World");
});
