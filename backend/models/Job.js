const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
    {
        type: { type: String, required: true },
        status: { type: String, default: "pending" }, // Status: pending, in-progress, completed, failed
        data: { type: Object, required: true }, // Example: { videoId, userId }
        result: { type: Object, default: null }, // Store result or errors
    },
    { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
