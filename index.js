const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send({
    status: 200,
    messages: "connected",
  });
});
const userRoutes = require("./src/routes/user.routes");
const roleRoutes = require("./src/routes/role.routes");
const authRoutes = require("./src/routes/auth.routes");
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/role", roleRoutes);
app.use("/api/v1/auth", authRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
