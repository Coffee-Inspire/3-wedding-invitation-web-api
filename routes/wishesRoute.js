const express = require("express");
const router = express.Router();

const { getWishes, addWishes } = require("../controllers/wishesControllers");

router.get("/", getWishes);
router.post("/", addWishes);
// router.delete("/", resetWishes);

module.exports = router;
