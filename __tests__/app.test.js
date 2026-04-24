const request = require("supertest");
const app = require("../app"); // ✅ NOT index.js

describe("Express API", () => {
  it("should return 200 and hello world", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("hello world");
  });
});