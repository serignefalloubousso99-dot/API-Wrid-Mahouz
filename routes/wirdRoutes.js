const express = require("express");
const router = express.Router();
const { getAllWirds, getWirdByType } = require("../controllers/wirdController");

// URL: /api/wird
router.get("/", getAllWirds);

// URL: /api/wird/kaamil ou /api/wird/hafif ou /api/wird/khatam
router.get("/:type", getWirdByType);

module.exports = router;