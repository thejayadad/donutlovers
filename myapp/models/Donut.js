import mongoose from "mongoose";

const DonutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 4
    },
    desc: {
        type: String,
        required: true,
        min: 6
    },
    imageUrl: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Hot',
            'Filled',
            'Custom',
            'Glaze',
        ]
    },
}, {timestamps: true})


export default mongoose?.models?.Donut || mongoose.model("Donut", DonutSchema)