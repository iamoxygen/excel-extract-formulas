const {
  extract
} = require("../controllers/extract");

const router = require("express").Router();


const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


router.post("/extract-formulas", upload.single("file"), extract);


module.exports = router;