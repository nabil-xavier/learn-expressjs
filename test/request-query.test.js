import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.firstname} ${req.query.lastname}`);
});

test("Test query parameter", async () => {
  const res = await request(app).get("/").query({ firstname: "John", lastname: "Doe" });
  expect(res.text).toBe("Hello John Doe");
});
