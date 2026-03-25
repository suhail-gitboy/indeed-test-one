
import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
        },
        answer: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Query = mongoose.model("Query", querySchema);