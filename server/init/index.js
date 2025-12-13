const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const slugify = require("slugify");
require("dotenv").config({ path: "../.env" });

const MONGO_URL = process.env.ATLASDB_URL || "mongodb://localhost:27017/wanderlust";

main().then(() => {
    console.log("connected to db");
    initDB();
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

// Procedural Data Generators
const adjectives = ["Luxury", "Cozy", "Modern", "Rustic", "Secluded", "Charming", "Spacious", "Historic", "Quiet", "Stunning"];
const types = ["Villa", "Cottage", "Apartment", "Cabin", "Loft", "Manor", "Bungalow", "Chalet", "Penthouse", "Studio"];
const locations = ["Goa", "Mumbai", "Delhi", "Manali", "Kerala", "Jaipur", "Udaipur", "Bangalore", "Chennai", "Kolkata"];

const generateRandomListings = (count) => {
    let generated = [];
    for (let i = 0; i < count; i++) {
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const loc = locations[Math.floor(Math.random() * locations.length)];

        generated.push({
            title: `${adj} ${type} in ${loc}`,
            description: `Experience the best of ${loc} in this amazing ${adj.toLowerCase()} ${type.toLowerCase()}. Perfect for a relaxing getaway!`,
            image: "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            price: Math.floor(Math.random() * 10000) + 2000,
            location: loc,
            country: "India",
            rating: (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1),
            reviewCount: Math.floor(Math.random() * 500) + 10
        });
    }
    return generated;
};

const initDB = async () => {
    await Listing.deleteMany({});

    // Combine seed data and generated data
    let allListings = [...initData.data, ...generateRandomListings(50)];

    // Add Slugs and owner (if we had users)
    allListings = allListings.map((obj) => ({
        ...obj,
        slug: slugify(obj.title, { lower: true, strict: true }) + "-" + Math.floor(Math.random() * 1000) // Append random number to ensure uniqueness
    }));

    await Listing.insertMany(allListings);
    console.log(`Initialized DB with ${allListings.length} listings`);
};