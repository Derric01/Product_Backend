import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

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

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});
