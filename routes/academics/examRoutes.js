// Implement protected API routes for managing Exams:
// create, retrieve (all and by ID), and update.
// Secured with isTeacherLogin and isTeacher middleware.

const express = require("express");
const {
    createExam,
    getExams,
    getExam,
    updatExam,
} = require("../../controller/academics/examsCtrl");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");

const examRouter = express.Router();

examRouter
    .route("/")
    .post(isTeacherLogin, isTeacher, createExam)
    .get(isTeacherLogin, isTeacher, getExams);

examRouter
    .route("/:id")
    .get(isTeacherLogin, isTeacher, getExam)
    .put(isTeacherLogin, isTeacher, updatExam);

module.exports = examRouter;
