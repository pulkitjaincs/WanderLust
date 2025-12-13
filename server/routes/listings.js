const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const listingController = require("../controllers/listings.js");

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(validateListing, wrapAsync(listingController.create));

router.get("/testListing", wrapAsync(listingController.test));

router.route("/:id")
    .get(wrapAsync(listingController.show))
    .put(validateListing, wrapAsync(listingController.update))
    .delete(wrapAsync(listingController.destroy));

module.exports = router;
