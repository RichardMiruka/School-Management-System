// Implement protected API routes for managing Questions:
// retrieve (all and by ID), create, and update. 
//Secured with isTeacherLogin and isTeacher middleware. 
// update targets a specific question by ID and create requires an exam ID in the URL.

const express = require("express");
const {
    createQuestion,
    getQuestions,
    getQuestion,
    updatQuestion,
} = require("../../controller/academics/questionsCtrl");
const isTeacher = require("../../middlewares/isTeacher");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");

const questionsRouter = express.Router();

questionsRouter.get("/", isTeacherLogin, isTeacher, getQuestions);
questionsRouter.get("/:id", isTeacherLogin, isTeacher, getQuestion);
questionsRouter.post("/:examID", isTeacherLogin, isTeacher, createQuestion);
questionsRouter.put("/:id", isTeacherLogin, isTeacher, updatQuestion);

module.exports = questionsRouter;
