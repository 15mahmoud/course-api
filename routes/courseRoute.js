const express = require('express');
const { uploadImageMiddleware } = require("../middlewares/upload");
const {
  createCourse,
  getCourses,
  getCourse,
  getCourseIndex,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const router = express.Router();

// /api/courses
router.post("/",createCourse)
router.get("/",getCourses);
// /api/courses/index
router.get("/index",getCourseIndex)
// api/courses/:id
router.get("/:id",getCourse)
// router.put("/:id", updateCourse);
router.put("/:id", uploadImageMiddleware, updateCourse);
router.delete("/:id", deleteCourse);




module.exports = router;