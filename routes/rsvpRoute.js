const express = require("express");
const router = express.Router();

const { getRsvp, addRsvp } = require("../controllers/rsvpControllers");

router.get("/", getRsvp);
router.post("/", addRsvp);
// router.delete("/", resetRsvp);

module.exports = router;
