import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 3
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    passwordHashed: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ["user", "seller"],
        default: "user"
    },

    refreshToken: {
        type: String
    }
}, { timestamps: true })

const userModel = mongoose.model("users", userSchema);

export default userModel;

