import express from "express";
import request from "supertest";

const app = express();

app.get("/hello/world", (req, res) => {
  res.json({
    path: req.path,
    oriignalUrl: req.originalUrl,
    hostname: req.hostname,
    protocol: req.protocol,
    secure: req.secure,
  });
});

test("Test request URL", async () => {
  const res = await request(app).get("/hello/world").query({ name: "World" });
  expect(res.body).toEqual({
    path: "/hello/world",
    oriignalUrl: "/hello/world?name=World",
    hostname: "127.0.0.1",
    protocol: "http",
    secure: false,
  });
});
