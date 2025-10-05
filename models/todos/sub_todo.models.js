import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({}, {timestamps: true})

export const SubTodo = mongoose.model('SubTodo', todoSchema)