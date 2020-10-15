const router = require("express").Router();
const choicesRoutes = require("./choices");
const promptInputRoutes = require("./promptInput");

// Book routes
router.use("/choices", choicesRoutes);
router.use("/promptInput", promptInputRoutes)

module.exports = router;
