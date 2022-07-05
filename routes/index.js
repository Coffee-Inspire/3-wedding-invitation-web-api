const express = require("express");
const router = express.Router();

const wishesRouter = require("./wishesRoute");
const rsvpRouter = require("./rsvpRoute");

router.use("/wishes", wishesRouter);
router.use("/rsvp", rsvpRouter);

module.exports = router;
