const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const Log = require("../middleware/logger");
router.get("/students", async (req, res) => {
    await Log(
        "backend",
        "info",
        "route",
        "GET /students route called"
    );
    studentController.getAllStudents(req, res);
});
module.exports = router;