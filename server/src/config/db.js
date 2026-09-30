import mongoose from 'mongoose';
import config from '../config/config.js';

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI);
        console.log("Server connected to DB!");
    } catch (error) {
        console.error("mongoDB connection failed:", error.message);
    }
}

export default connectDB;