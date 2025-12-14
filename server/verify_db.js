const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const MONGO_URL = process.env.ATLASDB_URL || "mongodb://localhost:27017/stayza";

async function verify() {
    console.log("1. Connecting to DB...");
    const start = Date.now();
    try {
        await mongoose.connect(MONGO_URL, { serverSelectionTimeoutMS: 5000 });
        console.log(`   Connected in ${Date.now() - start}ms`);
    } catch (err) {
        console.error(`   ❌ CONNECTION FAILED in ${Date.now() - start}ms`);
        console.error(err.message);
        process.exit(1);
    }

    console.log("2. Checking Listings Count...");
    const count = await Listing.countDocuments();
    console.log(`   Total Listings: ${count}`);

    if (count === 0) {
        console.error("   ❌ ERROR: Database is empty! You need to run the seed script.");
    } else {
        console.log("3. Inspecting First Listing...");
        const listing = await Listing.findOne().lean();
        console.log(`   ID: ${listing._id}`);
        console.log(`   Title: ${listing.title}`);
        console.log(`   Slug: ${listing.slug}`);

        if (!listing.slug) {
            console.error("   ❌ ERROR: Listing has NO SLUG. Data corruption.");
        } else {
            console.log("4. Testing Lookup Logic...");
            const found = await Listing.findOne({ slug: listing.slug }).lean();
            if (found) {
                console.log("   ✅ Lookup by Slug SUCCESS");
            } else {
                console.error("   ❌ Lookup by Slug FAILED");
            }
        }
    }
    process.exit();
}

verify();
