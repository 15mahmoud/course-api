const express = require('express');
const { uploadImageMiddleware } = require("../middlewares/upload");
const {
  createCertificate,
  updateCertificate,
} = require("../controllers/certificateController");


const router = express.Router();



router.post("/", createCertificate);
router.put("/:id", uploadImageMiddleware, updateCertificate);


module.exports = router;