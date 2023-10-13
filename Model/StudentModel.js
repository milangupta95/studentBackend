const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name is Required"],
        maxlength: 64
    },
    age: {
        type: Number,
        required: [true,"Age is Required"]
    },
    gender: {
        type: String,
        required: [true,"Gender is Required"],
        enum: ["Male","Female"]
    },
    district: {
        type: String,
        required: [true,"District Name is Required"]
    },
    School: {
        type: String,
        required: [true,"School Name is Required"]
    }
});

const studentModel = mongoose.model("student",studentSchema);
module.exports = studentModel;