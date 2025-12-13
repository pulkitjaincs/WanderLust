const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const skip = (page - 1) * limit;

    const totalListings = await Listing.countDocuments({});
    const listings = await Listing.find({})
        .skip(skip)
        .limit(limit);

    res.json({
        listings,
        currentPage: page,
        totalPages: Math.ceil(totalListings / limit),
        totalListings
    });
};

module.exports.show = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.json(listing);
};

module.exports.create = async (req, res) => {
    let listing = new Listing(req.body.listing);
    await listing.save();
    res.status(201).json(listing);
};

module.exports.update = async (req, res) => {
    let { id } = req.params;
    let updatedListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
    res.json(updatedListing);
};

module.exports.destroy = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
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
