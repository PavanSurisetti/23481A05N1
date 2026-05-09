const Log = require("../middleware/logger");
const getStudents = async () => {
    await Log(
        "backend",
        "info",
        "service",
        "Fetching student data from service"
    );
    return [
        {
            id: 1,
            name: "Pavan"
        },
        {
            id: 2,
            name: "Ganesha"
        }
    ];
};
module.exports = {
    getStudents
};