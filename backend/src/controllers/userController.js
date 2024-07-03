const User = require("../models/User");
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, email, no_telp, profile_image } = req.body;

    const allowedUpdates = { name, email, no_telp, profile_image };
    const updatedFields = Object.keys(allowedUpdates).filter(
      (key) => allowedUpdates[key] !== undefined
    );

    if (updatedFields.length === 0) {
      return res.status(400).json({ error: "No valid updates provided" });
    }

    const updates = {};
    updatedFields.forEach((key) => {
      updates[key] = allowedUpdates[key];
    });

    const result = await User.updateUser(userId, updates);

    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Profile updated successfully" });
    } else {
      res.status(404).json({ error: "User not found or no changes made" });
    }
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.userId; // Ambil userId dari token JWT

    // Panggil metode getUserProfile dari model User
    const userProfile = await User.getUserProfile(userId);

    if (!userProfile) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(userProfile);
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
