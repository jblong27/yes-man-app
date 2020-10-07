const router = require("express").Router();
const userChoiceController = require("../../controllers/userChoiceController");

// Matches with "/api/books"
router.route("/")
  .get(userChoiceController.findAll)
  .post(userChoiceController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userChoiceController.findById)
  .put(userChoiceController.update)
  .delete(userChoiceController.remove);

module.exports = router;
