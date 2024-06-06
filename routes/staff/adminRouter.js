const express = require("express");
const {
    registerAdmCtrl,
    loginAdminCtrl,
    getAdminsCtrl,
    getAdminCtrl,
    updateAdminCtrl,
    deleteAdminCtrl,
    adminSuspendTeacherCtrl,
    adminUnsuspendTeacherCtrl,
    adminWithdrawTeacherCtrl,
    adminUnwithdrawTeacherCtrl,
    adminPublishResultsCtrl,
    adminUnpublishResultsCtrl,
} = require("../../controller/staff/adminCtrl"); // import admin controller

const adminRouter = express.Router();

// admin registration
adminRouter.post("/register", registerAdmCtrl);

// admin login
adminRouter.post("/login", loginAdminCtrl);

// get all admins
adminRouter.get("/", getAdminsCtrl);

// get single admin
adminRouter.get("/:id", getAdminCtrl);

// update admin
adminRouter.put("/:id", updateAdminCtrl);

// delete admin
adminRouter.delete("/:id", deleteAdminCtrl);

// admin suspending a teacher account
adminRouter.put("/suspend/teacher/:id", adminSuspendTeacherCtrl);

// admin unsuspending a teacher account
adminRouter.put("/unsuspend/teacher/:id", adminUnsuspendTeacherCtrl);

// admin withdrawing a teacher account
adminRouter.put("/withdraw/teacher/:id", adminWithdrawTeacherCtrl);

// admin unwithdrawing a teacher account
adminRouter.put("/unwithdraw/teacher/:id", adminUnwithdrawTeacherCtrl);

// admin publishing exam results
adminRouter.put("/publish/exam/:id", adminPublishResultsCtrl);

// admin unpublishing exam results
adminRouter.put("/unpublish/exam/:id", adminUnpublishResultsCtrl);

module.exports = adminRouter;
