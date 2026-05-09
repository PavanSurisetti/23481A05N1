const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentRoutes");
const Log = require("./middleware/logger");
app.use(express.json());
app.use("/api", studentRoutes);
app.get("/", async (req, res) => {
    await Log(
        "backend",
        "info",
        "route",
        "Home route accessed"
    );
    res.send("AFFORDMED Middleware Project Running");
});
const PORT = 3000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await Log(
        "backend",
        "info",
        "service",
        `Server started on port ${PORT}`
    );
});