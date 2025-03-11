require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const app = express();

// 🛡️ Security Middlewares
app.use(helmet()); // Secure HTTP headers
app.use(cors({ origin: "*", credentials: true })); // Enable CORS
app.use(cookieParser()); // Parse cookies
app.use(compression()); // Enable Gzip compression

// 📌 Rate Limiting (Prevents Abuse)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: "Too many requests from this IP, please try again later."
});
app.use(limiter);

// 📜 Logging Middleware
app.use(morgan("dev"));

// 🏗️ Body Parser Middleware
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// ✅ Test Route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// ❌ Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

// 🚀 Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
