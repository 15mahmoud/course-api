const express = require('express');
const { uploadImageMiddleware } = require("../middlewares/upload");

const {
  createExam,
  getExams,
  getExam,
  updateEexam,
  deleteExam,
} = require("../controllers/examController");

const router = express.Router();

router.post("/", createExam);
router.get("/", getExams);
router.get("/:id", getExam);
router.put("/:id", uploadImageMiddleware, updateEexam);
router.delete("/:id", deleteExam);

module.exports = router;
