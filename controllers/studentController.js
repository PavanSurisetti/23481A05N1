const studentService = require("../services/studentService");
const Log = require("../middleware/logger");
const getAllStudents = async (req, res) => {
    try {
        await Log(
            "backend",
            "info",
            "controller",
            "Student controller triggered"
        );
        const students = await studentService.getStudents();
        await Log(
            "backend",
            "debug",
            "controller",
            "Students fetched successfully"
        );
        res.status(200).json({
            success: true,
            data: students
        });
    } catch (error) {
        await Log(
            "backend",
            "error",
            "handler",
            error.message
        );
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
module.exports = {
    getAllStudents
};