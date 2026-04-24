const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express CI/CD! Test Deployment" });
});

app.get("/test", (req, res) => {
  res.json({ message: "Update Deployment" });
});

app.get("/test1", (req, res) => {
  res.json({ message: "Horay New Update Available" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;