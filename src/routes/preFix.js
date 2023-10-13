const router = require("express").Router();
const homeRoutes = require("./index");
router.use(homeRoutes);
module.exports = router;
