import express from "express";
import request from "supertest";

const app = express();

app.get(/\/products\/.*\.json/, (req, res) => {
  res.send(req.originalUrl);
});

app.get(/\/categories\/\d+\.json/, (req, res) => {
  res.send(req.originalUrl);
});

test("Test route path", async () => {
  let res = await request(app).get("/products/test.json");
  expect(res.text).toBe("/products/test.json");

  res = await request(app).get("/categories/1234.json");
  expect(res.text).toBe("/categories/1234.json");

  res = await request(app).get("/categories/test.json");
  expect(res.status).toBe(404);
});

