const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const slugify = require("slugify");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

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

// Image Bank
const imageUrls = [
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
];

const generateRandomListings = (count) => {
    let generated = [];
    for (let i = 0; i < count; i++) {
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const type = types[Math.floor(Math.random() * types.length)];
        const loc = locations[Math.floor(Math.random() * locations.length)];
        const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        generated.push({
            title: `${adj} ${type} in ${loc}`,
            description: `Experience the best of ${loc} in this amazing ${adj.toLowerCase()} ${type.toLowerCase()}. Perfect for a relaxing getaway!`,
            image: randomImage,
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