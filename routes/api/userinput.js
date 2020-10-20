const express = require("express");
const router = express.Router();
const userInput = require("../../models/userInput");

router.post('/', (req, res) => {
  userInput.create(req.body)
    .then((userinput) => res.json(userinput))
    .catch(err => res.json(err))
})

module.exports = router;