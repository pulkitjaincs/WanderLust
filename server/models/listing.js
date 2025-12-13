const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    reviewCount: {
        type: Number,
        default: 0
    }
});

listingSchema.index({ price: 1 });
listingSchema.index({ rating: -1 });
listingSchema.index({ reviewCount: -1 });

// Slug Generator
listingSchema.pre('validate', function (next) {
    if (this.title) {
        // Generate slug from title
        this.slug = slugify(this.title, { lower: true, strict: true });
        // Handle uniqueness (simple version - for production, you'd check DB)
        // Since validate runs before save, we'll rely on Mongo's unique index to error if duplicate
    }
    next();
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;