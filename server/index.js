// DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const cors =  require("cors");
const app = express();
const PORT=  process.env.PORT || 5000;

// https://www.youtube.com/watch?v=j55fHUJqtyw

// MIDDLEWARE
app.use(express.json());
app.use(cors());

const posts = require("./routes/api/posts");
app.use("/api/posts", posts);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));