import mongoose from "mongoose";

const { Schema} = mongoose

const newsSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    },
});

const News = mongoose.model("News", newsSchema)

export default News;