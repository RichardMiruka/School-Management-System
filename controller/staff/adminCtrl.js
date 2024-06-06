const Admin = require("../../model/Staff/Admin");

//@desc Register admin
//@route POST /api/admins/register
//@acess  Private
exports.registerAdmCtrl = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        //Check if email exists
        const adminFound = await Admin.findOne({ email });
        // if (adminFound) {
        //   res.json("Admin Exists");
        // }
        //register
        const user = await Admin.create({
            name,
            email,
            password,
        });
        res.status(201).json({
            status: "success",
            data: user,
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

//@desc     login admins
//@route    POST /api/v1/admins/login
//@access   Private
exports.loginAdminCtrl = async (req, res) => {
    const { email, password } = req.body;
    try {
        //find user
        const user = await Admin.findOne({ email });
        if (!user) {
            return res.json({ message: "Invliad login crendentials" });
        }
        if (user && (await user.verifyPassword(password))) {
            return res.json({ data: user });
        } else {
            return res.json({ message: "Invliad login crendentials" });
        }
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

//@desc     Get all admins
//@route    GET /api/v1/admins
//@access   Private

exports.getAdminsCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "All admins",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};
//@desc     Get single admin
//@route    GET /api/v1/admins/:id
//@access   Private

exports.getAdminCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "single admin",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};
//@desc    update admin
//@route    UPDATE /api/v1/admins/:id
//@access   Private
exports.updateAdminCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "update admin",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

//@desc     Delete admin
//@route    DELETE /api/v1/admins/:id
//@access   Private
exports.deleteAdminCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: "delete admin",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

//@desc     admin suspends a teacher
//@route    PUT /api/v1/admins/suspend/teacher/:id
//@access   Private

exports.adminSuspendTeacherCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: " admin suspend teacher",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};
//@desc     admin unsuspends a teacher
//@route    PUT /api/v1/admins/unsuspend/teacher/:id
//@access   Private
exports.adminUnSuspendTeacherCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: " admin Unsuspend teacher",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};
//@desc     admin withdraws a teacher
//@route    PUT /api/v1/admins/withdraw/teacher/:id
//@access   Private
exports.adminWithdrawTeacherCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: " admin withdraw teacher",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};
//@desc     admin Unwithdraws a teacher
//@route    PUT /api/v1/admins/withdraw/teacher/:id
//@access   Private
exports.adminUnWithdrawTeacherCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: " admin Unwithdraw teacher",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};
//@desc     admin publich exam result
//@route    PUT /api/v1/admins/publish/exam/:id
//@access   Private
exports.adminPublishResultsCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: " admin publish exam",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};

//@desc     admin unpublish exam result
//@route    PUT /api/v1/admins/unpublish/exam/:id
//@access   Private
exports.adminUnPublishResultsCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            data: " admin unpublish exam",
        });
    } catch (error) {
        res.json({
            status: "failed",
            error: error.message,
        });
    }
};
// Path: routes/staff/adminRouter.js
