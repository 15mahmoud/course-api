const express = require('express');

const {
  createLesson,
  getLessons,
  getLesson,
  updateLesson,
  deleteLesson,
} = require("../controllers/lessonController");

const router = express.Router();

router.post("/", createLesson);
router.get("/", getLessons);
router.get("/:id", getLesson);
router.put("/:id", updateLesson);
router.delete("/:id", deleteLesson);

module.exports = router;
