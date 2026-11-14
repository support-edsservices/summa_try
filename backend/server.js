
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// GET API
app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Express.js Backend!",
        status: "success"
    });
});

const PORT = process.env.PORT || 5000; 
// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express server running on port ${PORT}`);
});
