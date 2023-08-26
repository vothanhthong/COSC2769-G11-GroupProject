const mongoose = require("mongoose");

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));

module.exports = {mongoose};