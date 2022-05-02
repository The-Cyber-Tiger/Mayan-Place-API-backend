import mongoose from "mongoose"

const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    conditions: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    }
    
}, {timestamps: true})

export const Place = mongoose.model('places', placeSchema)