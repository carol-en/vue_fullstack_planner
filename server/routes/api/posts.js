const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

// GET POST ROUTE
router.get("/", (req, res) => {
    res.send("Hello");
});

// ADD POST ROUTE


// UPDATE POST ROUTE


// DELETE POST ROUTE


module.exports = router;