const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
require("dotenv").config();

const compression = require("compression");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const listingsRouter = require("./routes/listings.js");

app.use(helmet()); // Secure HTTP headers
app.use(compression()); // Compress all responses

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

// Cache headers for static assets & GET requests
app.use((req, res, next) => {
    if (req.method === 'GET') {
        res.set('Cache-Control', 'public, max-age=300'); // Cache for 5 minutes
    } else {
        res.set('Cache-Control', 'no-store');
    }
    next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public"), { maxAge: '1d' })); // Cache static files for 1 day

const MONGO_URL = process.env.ATLASDB_URL || "mongodb://localhost:27017/wanderlust";

main().then(() => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL, {
        maxPoolSize: 10 // Maintain up to 10 socket connections
    });
}

app.get("/", (req, res) => {
    res.send("API is working");
});

app.use("/listings", listingsRouter);

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).send(message);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});