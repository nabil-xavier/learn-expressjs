import express from "express";
import request from "supertest";

const app = express();

app.get(/\/products\/(.+)/, (req, res) => {
  const id = req.params[0];
  res.send(`Product ID: ${id}`);
});

app.get(/\/categories\/(\d+)/, (req, res) => {
  const id = req.params[0];
  res.send(`Category ID: ${id}`);
});

test("Test route path", async () => {
  let res = await request(app).get("/products/test");
  expect(res.text).toBe("Product ID: test");

  res = await request(app).get("/categories/1234");
  expect(res.text).toBe("Category ID: 1234");

  res = await request(app).get("/categories/test");
  expect(res.status).toBe(404);
});

