const request = require("supertest");
const app = require("../index");

describe("Express API", () => {
  it("should return 200 and hello world", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello from Express CI/CD! Test Deployment");
  });
});