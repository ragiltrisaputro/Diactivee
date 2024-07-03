const express = require("express");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

const router = express.Router();

router.get("/admin", auth, admin, (req, res) => {
  res.status(200).json({ message: "Welcome Admin" });
});

module.exports = router;
