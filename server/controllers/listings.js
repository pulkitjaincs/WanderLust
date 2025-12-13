const mongoose = require("mongoose");
const Listing = require("../models/listing");

// Helper to find by ID or Slug
async function findListing(idOrSlug) {
    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        console.log(`[DEBUG] Searching by ID: ${idOrSlug}`);
        const found = await Listing.findById(idOrSlug).lean();
        return found ? found : await Listing.findOne({ slug: idOrSlug }).lean();
    } else {
        console.log(`[DEBUG] Searching by Slug: ${idOrSlug}`);
        return await Listing.findOne({ slug: idOrSlug }).lean();
    }
}

async function findListingAndModify(idOrSlug, updateData) {
    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        const found = await Listing.findByIdAndUpdate(idOrSlug, updateData, { new: true });
        if (found) return found;
    }
    return await Listing.findOneAndUpdate({ slug: idOrSlug }, updateData, { new: true });
}

async function findListingAndDelete(idOrSlug) {
    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        const found = await Listing.findByIdAndDelete(idOrSlug);
        if (found) return found;
    }
    return await Listing.findOneAndDelete({ slug: idOrSlug });
}

module.exports.index = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;

    const totalListings = await Listing.countDocuments({});
    const listings = await Listing.find({})
        .skip(skip)
        .limit(limit)
        .lean();

    res.json({
        listings,
        currentPage: page,
        totalPages: Math.ceil(totalListings / limit),
        totalListings
    });
};

module.exports.show = async (req, res) => {
    let { id } = req.params;
    console.log(`[DEBUG] Show listing for: ${id}`);

    let listing = await findListing(id);
    console.log(`[DEBUG] Found listing: ${listing ? listing._id : 'NULL'}`);

    if (!listing) return res.status(404).json({ message: "Listing not found" });
    res.json(listing);
};

module.exports.create = async (req, res) => {
    let listing = new Listing(req.body.listing);
    await listing.save();
    res.status(201).json(listing);
};

module.exports.update = async (req, res) => {
    let { id } = req.params;
    let updatedListing = await findListingAndModify(id, { ...req.body.listing });
    res.json(updatedListing);
};

module.exports.destroy = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await findListingAndDelete(id);
    res.json(deletedListing);
};

module.exports.test = async (req, res) => {
    let sampleLisitng = new Listing({
        title: "Sample Listing",
        description: "By the beach",
        price: 1200,
        location: "Calangute, Goa"
    });
    await sampleLisitng.save();
    console.log("sample was saved");
    res.send("successful testing");
};
