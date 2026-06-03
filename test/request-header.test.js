import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  const type = req.get("accept");
  res.send(type);
});

test("Test header", async () => {
  const res = await request(app).get("/").set("accept", "text/plain");
  expect(res.text).toBe("text/plain");
});
