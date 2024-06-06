// Implement protected API routes for managing Year Groups:
// create, retrieve (all and by ID), update, and delete.
// Secured with isLogin and isAdmin middleware.

const express = require("express");
const {
    createYearGroup,
    deleteYearGroup,
    getYearGroup,
    getYearGroups,
    updateYearGroup,
} = require("../../controller/academics/yearGroups");

const isAdmin = require("../../middlewares/isAdmin");
const isLogin = require("../../middlewares/isLogin");

const yearGroupRouter = express.Router();

yearGroupRouter
    .route("/")
    .post(isLogin, isAdmin, createYearGroup)
    .get(isLogin, isAdmin, getYearGroups);

yearGroupRouter
    .route("/:id")
    .get(isLogin, isAdmin, getYearGroup)
    .put(isLogin, isAdmin, updateYearGroup)
    .delete(isLogin, isAdmin, deleteYearGroup);

module.exports = yearGroupRouter;
