const mongoose = require("mongoose");
const LibraryCardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("LibraryCard", LibraryCardSchema);
