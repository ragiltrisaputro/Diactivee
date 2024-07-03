const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

// Rute untuk update profil
router.put("/profile", auth, userController.updateProfile);

// Rute untuk mendapatkan profil pengguna
router.get("/profile", auth, userController.getProfile);

module.exports = router;
