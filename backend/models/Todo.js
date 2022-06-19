const mongoose = require("mongoose");

// create schema
const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

module.exports = mongoose.model("Todo", TodoSchema);