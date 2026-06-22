import express from "express";
import request from "supertest";

const app = express();

const router = express.Router();

router.use((req, res, next) => {
  console.info(`Receive request: ${req.originalUrl}`);
  next();
});

router.get("/feature/a", (req, res) => {
  res.send("Feature A");
})

test("Test router disabled", async () => {
  let res = await request(app).get("/feature/a");
  expect(res.status).toBe(404);
});

test("Test router enabled", async () => {
  app.use(router);

  let res = await request(app).get("/feature/a");
  expect(res.text).toBe("Feature A");
});


