// our controller is a normal function
// it is an anonymous function in javascript - a function without a name

// @desc    Register admin
// @route   POST /api/v1/admins/register
// @access  Private
exports.registerAdmCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin has been registered successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Login admin
// @route   POST /api/v1/admins/login
// @access  Private
exports.loginAdminCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin logged in successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Get all admins
// @route   GET /api/v1/admins
// @access  Private
exports.getAllAdminsCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "All admins fetched successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Get single admin
// @route   GET /api/v1/admins/:id
// @access  Private
exports.getSingleAdminCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Single admin fetched successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Update admin
// @route   PUT /api/v1/admins/:id
// @access  Private
exports.updateAdminCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Delete admin
// @route   DELETE /api/v1/admins/:id
// @access  Private
exports.deleteAdminCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Admin deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin suspending a teacher account
// @route   PUT /api/v1/admins/teacher/:id
// @access  Private
exports.suspendTeacherCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account suspended successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin unwithdrawing a teacher account
// @route   PUT /api/v1/admins/teacher/:id
// @access  Private
exports.unsuspendTeacherCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account unsuspended successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin withdrawing a teacher account
// @route   PUT /api/v1/admins/teacher/:id
// @access  Private
exports.withdrawTeacherCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account withdrawn successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin unwithdrawing a teacher account
// @route   PUT /api/v1/admins/teacher/:id
// @access  Private
exports.unwithdrawTeacherCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account unwithdrawn successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin updating a teacher account
// @route   PUT /api/v1/admins/teacher/:id
// @access  Private
exports.updateTeacherCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin deleting a teacher account
// @route   PUT /api/v1/admins/teacher/:id
// @access  Private
exports.deleteTeacherCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Teacher account deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin suspending a student account
// @route   PUT /api/v1/admins/student/:id
// @access  Private
exports.suspendStudentCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Student account suspended successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin unwithdrawing a student account
// @route   PUT /api/v1/admins/student/:id
// @access  Private
exports.unsuspendStudentCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Student account unsuspended successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin withdrawing a student account
// @route   PUT /api/v1/admins/student/:id
// @access  Private
exports.withdrawStudentCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Student account withdrawn successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin unwithdrawing a student account
// @route   PUT /api/v1/admins/student/:id
// @access  Private
exports.unwithdrawStudentCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Student account unwithdrawn successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin updating a student account
// @route   PUT /api/v1/admins/student/:id
// @access  Private
exports.updateStudentCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Student account updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc    Admin deleting a student account
// @route   PUT /api/v1/admins/student/:id
// @access  Private
exports.deleteStudentCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Student account deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc Admin publishing exam results
// @route PUT /api/v1/admins/exam/:id
// @access Private
exports.publishExamCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Exam results published successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc Admin unpublishing exam results
// @route PUT /api/v1/admins/exam/:id
// @access Private
exports.unpublishExamCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Exam results unpublished successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

// @desc Admin deleting exam results
// @route DELETE /api/v1/admins/exam/:id
// @access Private
exports.deleteExamCtrl = (req, res) => {
    try {
        res.status(201).json({
            status: "success",
            message: "Exam results deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message
        })
    }
};

