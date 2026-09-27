const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Frontend files
app.use(express.static(path.join(__dirname, "public")));

// Birthday API
app.get("/api/birthday", (req, res) => {
    res.json({
        name: "SAILU",
        date: "28 September",
        message:
            "May your life always be filled with happiness, beautiful memories, endless smiles and wonderful moments. Keep smiling and keep shining. ✨"
    });
});

// Express 5 compatible fallback
app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api/")) {
        res.sendFile(path.join(__dirname, "public", "index.html"));
    } else {
        next();
    }
});

// Start server
app.listen(PORT, () => {
    console.log("");
    console.log("🎂 SAILU Birthday Server Started!");
    console.log(`🌐 Website: http://localhost:${PORT}`);
    console.log(`🎁 API: http://localhost:${PORT}/api/birthday`);
    console.log("");
});