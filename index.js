const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express CI/CD! Test Deployment" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;