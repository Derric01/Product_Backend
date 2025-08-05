import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.model.js";

dotenv.config({ path: "../.env" });

const dummyProducts = [
    {
        name: "iPhone 15 Pro Max",
        price: 1199.99,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop&crop=center"
    },
    {
        name: "MacBook Air M3",
        price: 1099.99,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop&crop=center"
    },
    {
        name: "AirPods Pro",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center"
    },
    {
        name: "Apple Watch Series 9",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop&crop=center"
    },
    {
        name: "iPad Pro 12.9\"",
        price: 1099.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop&crop=center"
    },
    {
        name: "Sony WH-1000XM5",
        price: 399.99,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop&crop=center"
    },
    {
        name: "Samsung Galaxy S24 Ultra",
        price: 1299.99,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop&crop=center"
    },
    {
        name: "Dell XPS 13",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&crop=center"
    },
    {
        name: "Nintendo Switch OLED",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&crop=center"
    },
    {
        name: "Google Pixel 8 Pro",
        price: 999.99,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop&crop=center"
    }
];

const seedProducts = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected to MongoDB");

        // Clear existing products
        await Product.deleteMany({});
        console.log("🗑️ Cleared existing products");

        // Insert dummy products
        const products = await Product.insertMany(dummyProducts);
        console.log(`🎉 Added ${products.length} dummy products!`);

        // Close connection
        await mongoose.connection.close();
        console.log("✅ Database connection closed");
    } catch (error) {
        console.error("❌ Error seeding products:", error.message);
        process.exit(1);
    }
};

seedProducts();
