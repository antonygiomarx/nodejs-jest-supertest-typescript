import request from "supertest";

import { app } from "../src/app";

describe("Server is running", () => {
  test("Server is running on port 3000", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});

describe("GET /ping", () => {
  test('returns "pong"', async () => {
    const response = await request(app).get("/ping");
    expect(response.status).toBe(200);
    expect(response.text).toBe("pong");
  });
});
