import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
    }
})

const orderSchema = mongoose.Schema({
    orderprice: {
        type: String,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems: {
        type: [orderItemSchema],
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"]
    }
}, {timestamps: true})