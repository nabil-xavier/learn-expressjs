import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Response");
});

test("Test response", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello Response");
});

