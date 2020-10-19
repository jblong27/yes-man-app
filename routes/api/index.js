const router = require("express").Router();
const choicesRoutes = require("./choices");
const promptInputRoutes = require("./promptInput");

// choices and prompt input routes
router.use("/choices", choicesRoutes);
router.use("/promptInput", promptInputRoutes)

module.exports = router;
