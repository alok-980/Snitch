import dotenv from 'dotenv';
dotenv.config();

const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT: process.env.PORT || 5000,
    IMAGEKIT_PRIVATE_KEY: process.env.IMAGEKIT_PRIVATE_KEY,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET
}

export default config;