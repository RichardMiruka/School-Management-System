const express = require("express");
const app = require("../../app/app");
const {
    registerAdmCtrl,
    adminPublishResultsCtrl,
    adminSuspendTeacherCtrl,
    adminUnPublishResultsCtrl,
    adminUnSuspendTeacherCtrl,
    adminUnWithdrawTeacherCtrl,
    adminWithdrawTeacherCtrl,
    deleteAdminCtrl,
    getAdminCtrl,
    getAdminsCtrl,
    loginAdminCtrl,
    updateAdminCtrl,
} = require("../../controller/staff/adminCtrl");

const adminRouter = express.Router();

//register
adminRouter.post("/register", registerAdmCtrl);

//login
adminRouter.post("/login", loginAdminCtrl);

//get all
adminRouter.get("/", getAdminsCtrl);

//single

adminRouter.get("/:id", getAdminCtrl);

//update
adminRouter.put("/:id", deleteAdminCtrl);

//delete
adminRouter.delete("/:id", updateAdminCtrl);

//suspend
adminRouter.put("/suspend/teacher/:id", adminSuspendTeacherCtrl);

//unsuspend
adminRouter.put("/unsuspend/teacher/:id", adminUnSuspendTeacherCtrl);

//withdraw
adminRouter.put("/withdraw/teacher/:id", adminWithdrawTeacherCtrl);

//unwithdraw
adminRouter.put("/unwithdraw/teacher/:id", adminUnWithdrawTeacherCtrl);

//publish exams
adminRouter.put("/publish/exam/:id", adminPublishResultsCtrl);

//unpublish exams results
adminRouter.put("/unpublish/exam/:id", adminUnPublishResultsCtrl);

module.exports = adminRouter;
