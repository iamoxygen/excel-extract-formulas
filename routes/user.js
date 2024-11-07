const {
  userInfo
} = require("../controllers/user");

const router = require("express").Router();

const { requireSignIn } = require("../middleware/auth");

router.get("/user/profile", requireSignIn, userInfo);


module.exports = router;