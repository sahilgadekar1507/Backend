import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    salery: {
        type: Number,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: Number,
        default: 0,
        required: true,
    },
    worksInHospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        }
    ]
}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorSchema)