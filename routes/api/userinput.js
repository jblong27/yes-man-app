const router = require("express").Router();
const userInputController = require("../../controllers/userInputController");

router.route("/")
  .get(userInputController.findAll)
  .post(userInputController.create);

// Matches with "/api/userInput/:id"
router
  .route("/:id")
  .get(userInputController.findById)
  .put(userInputController.update)
  .delete(userInputController.remove);

module.exports = router;