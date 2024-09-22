const express = require("express");
const app = express();
const morgan = require("morgan");
const serverless = require("serverless-http");
const router = express.Router();


// Set up logging middleware
app.use(morgan("dev"));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Home route
router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});

router.get("/become_a_partner", (req, res) => {
  res.sendFile("become_a_partner.html", { root: "./public" });
});

// Use the router
app.use("/.netlify/functions/app", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports.handler = serverless(app);
