const mongoose = require("mongoose");
const LibraryCardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    frameType: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    atk: {
        type: Number,
    },
    def: {
        type: Number,
    },
    level: {
        type: Number,
    },
    race: {
        type: String,
    },
    attribute: {
        type: String,
    },
    archetype: {
        type: String,
    },
    scale: {
        type: Number,
    },
    linkval: {
        type: Number,
    },
    linkmarkers: {
        type: [String],
    },
});

module.exports = mongoose.model("LibraryCard", LibraryCardSchema);
