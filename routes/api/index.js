const router = require("express").Router();
const choicesRoutes = require("./choices");

// Book routes
router.use("/choices", choicesRoutes);

module.exports = router;
