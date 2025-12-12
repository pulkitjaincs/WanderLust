const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const cors = require("cors");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

const MONGO_URL = process.env.ATLASDB_URL || "mongodb://localhost:27017/wanderlust";

main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("API is working");
});

app.get("/testListing", wrapAsync(async (req, res) => {
    let sampleLisitng = new Listing({
        title: "Sample Listing",
        description: "By the beach",
        price: 1200,
        location: "Calangute, Goa"
    });
    await sampleLisitng.save();
    console.log("sample was saved");
    res.send("successful testing");
}));

app.get("/listings", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.json(allListings);
}));

app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.json(listing);
}));

app.post("/listings", wrapAsync(async (req, res) => {
    let listing = new Listing(req.body.listing);
    await listing.save();
    res.status(201).json(listing);
}));

app.put("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let updatedListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
    res.json(updatedListing);
}));

app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    res.json(deletedListing);
}));

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).send(message);
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});