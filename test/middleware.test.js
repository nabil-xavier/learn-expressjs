import express from "express";
import request from "supertest";

const logger = (req, res, next) => {
  console.info(`Receive request: ${req.method} ${req.originalUrl}`);
  next();
};

const addPoweredHeader = (req, res, next) => {
  res.set("x-powered-by", "John Doe");
  next();
};

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).end();
  }
};

const requestTimeMiddleWare = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};

const app = express();

app.use(logger);
app.use(addPoweredHeader);
app.use(apiKeyMiddleware);
app.use(requestTimeMiddleWare);

app.get("/", (req, res) => {
  res.send("Hello Response");
});

app.get("/time", (req, res) => {
  res.send(`Today is ${req.requestTime}`)
})

test("Test middleware", async () => {
  const res = await request(app).get("/").query({ apiKey: 123 });
  expect(res.get("x-powered-by")).toBe("John Doe")
  expect(res.text).toBe("Hello Response");
});

test("test middleware unauthorized", async () => {
  const res = await request(app).get("/")
  expect(res.status).toBe(401)
})

test("Test middleware time", async () => {
  const res = await request(app).get("/time").query({ apiKey: 123 });
  expect(res.get("x-powered-by")).toBe("John Doe")
  expect(res.text).toContain("Today is");
});
