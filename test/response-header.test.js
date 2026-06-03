import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.set({ "x-powered-by": "John Doe" });
  res.set({ "x-author": "John" });
  res.end();
});

test("Test response header", async () => {
  const res = await request(app).get("/");
  expect(res.get("x-powered-by")).toBe("John Doe");
  expect(res.get("x-author")).toBe("John");
});
