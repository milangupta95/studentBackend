const db_link = "mongodb+srv://admin:WZMd1vpiV1Tvvpuv@cluster0.81todff.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require('mongoose');
const emailValidator = require('email-validator');

mongoose.connect(db_link).then(() => {
    console.log("SuccessFully Connected to the Database");
}).catch((err) => {
    console.log("There was Some Error while connecting to the database" + err.message);
})

const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name is Required"],
        maxlength: 64
    },
    email: {
        type: String,
        unique: [true,"Email is Already Associated"],
        required: [true,"Email is Required"],
        validate: {
            validator: function() {
                return emailValidator.validate(this.email);
            },
            message: () => "Not an valid email"
        }
    },
    password: {
        type: String,
        required: [true,"Password is Required"],
    },
    School: {
        type: String,
        required: [true,"School Name is Required"]
    },
    role: {
        type: String,
        enum: ['admin','user'],
    }
});
const adminModel = mongoose.model("Admin",adminSchema);
module.exports = adminModel;