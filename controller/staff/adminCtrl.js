// our controller is a normal function
// it is an anonymous function in javascript - a function without a name

// @desc    Register admin
// @route   POST /api/v1/admins/register
// @access  Private
exports.registerAdmnCtrl = (req, res) => {
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

module.exports = {
    registerAdmnCtrl,
};
