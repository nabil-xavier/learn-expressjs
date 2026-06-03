import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.set({ "content-type": "text/html" });
  res.send("<html><body>Hello World</body></html>");
});

test("Test response body", async () => {
  const res = await request(app).get("/");
  expect(res.get("content-type")).toContain("text/html");
  expect(res.text).toBe("<html><body>Hello World</body></html>");
});
