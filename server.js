import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import fs from "fs";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config({ path: "../.env" });

// Debug: Check if MONGO_URI is loaded
console.log("MONGO_URI:", process.env.MONGO_URI ? "✅ Loaded" : "❌ Not found");

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

// Health check endpoint
app.get("/", (req, res) => {
    res.json({ message: "API is working! 🚀" });
});

// Only serve static files if frontend directory exists (for monorepo deployments)
if (process.env.NODE_ENV === "production") {
    const frontendPath = path.join(__dirname, "/frontend/dist");
    
    if (fs.existsSync(frontendPath)) {
        app.use(express.static(frontendPath));
        app.get("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
        });
    }
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
