const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

// GET POST ROUTE
router.get("/", async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// ADD POST ROUTE
router.post("/",async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// UPDATE POST ROUTE


// DELETE POST ROUTE
router.delete("/:id", async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

// CONNECT TO DATABASE
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ("mongodb+srv://admin123:admin123@vuecluster-4q10h.mongodb.net/test?retryWrites=true&w=majority",{
    useUnifiedTopology: true 
    });
    return client.db("vue").collection("posts");
}

module.exports = router;