const axios = require("axios");
require("dotenv").config();
const Log = async (stack, level, packageName, message) => {
    try { 
        // to handle the error we use the try block
        const response = await axios.post(
            process.env.LOG_API,
            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
                    clientID: process.env.CLIENT_ID,
                    clientSecret: process.env.CLIENT_SECRET,
                    "Content-Type": "application/json"
                }
            }
        );
        console.log("LOG CREATED:", response.data);
    } catch (error) {
        console.log("LOG FAILED");
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
};
module.exports = Log;