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
exports.getAdminsCtrl = (req, res) => {
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
exports.getAdminCtrl = (req, res) => {
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
exports.adminSuspendTeacherCtrl = (req, res) => {
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

// @desc    Admin unsuspending a teacher account
// @route   PUT /api/v1/admins/teacher/:id
// @access  Private
exports.adminUnsuspendTeacherCtrl = (req, res) => {
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
exports.adminWithdrawTeacherCtrl = (req, res) => {
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
exports.adminUnwithdrawTeacherCtrl = (req, res) => {
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
exports.adminUpdateTeacherCtrl = (req, res) => {
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
exports.adminDeleteTeacherCtrl = (req, res) => {
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


// @desc Admin publishing exam results
// @route PUT /api/v1/admins/exam/:id
// @access Private
exports.adminPublishResultsCtrl = (req, res) => {
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
exports.adminUnpublishResultsCtrl = (req, res) => {
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
exports.adminDeleteResultsCtrl = (req, res) => {
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

