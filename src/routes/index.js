const router = require("express").Router();
const {
  githubGetController,
  homeGetController,
} = require("../controllers/index");
router.get("/", homeGetController);
router.get("/github", githubGetController);

module.exports = router;
