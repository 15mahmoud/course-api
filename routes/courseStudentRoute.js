const express = require("express");

const {
  createCourseStudent,
  getCourseStudents,
  getCourseStudent,
  updateCourseStudent,
  deleteCourseStudent,
} = require("../controllers/courseStudentController");

const router = express.Router();

router.post("/", createCourseStudent);
router.get("/", getCourseStudents);
router.get("/:id", getCourseStudent);
router.put("/:id", updateCourseStudent);
router.delete("/:id", deleteCourseStudent);

module.exports = router;
