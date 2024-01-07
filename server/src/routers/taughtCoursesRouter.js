const express = require("express");
const taughtCourseRouter = express.Router();

const { getCourses } = require("../controllers/taughtCoursesController");

taughtCourseRouter.get("/:userId/courses_teacher_specific", getCourses);

module.exports = taughtCourseRouter;
