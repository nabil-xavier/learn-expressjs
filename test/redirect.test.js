import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.redirect("/to-next-page");
});

test("Test redirect", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(302);
  expect(res.get("location")).toBe("/to-next-page");
});
