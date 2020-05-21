const express = require("express");
const mongodb = require("mongodb");
const router = express.Router();

// GET POST ROUTE
router.get("/", async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// SHOW ROUTE 
router.get("/:id", async (req, res) => {
    const posts = await loadPostsCollection();
    const postId = new mongodb.ObjectID(req.params.id);
    res.send(await posts.find({_id: postId}).toArray());
});

//UPDATE ROUTE
// router.put("/:id", async (req, res) => {
//     const postId = new mongodb.ObjectID(req.params.id);
//     const posts = await loadPostsCollection();
//     res.send("Post updated!", req.params.body);
// });

// POST ROUTE
// router.post("/",async (req, res) => {
//     const posts = await loadPostsCollection();
//     req.send(req.body);
// });

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