import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 50
    },

    description: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
        maxLength: 500
    },

    images: {
        type: [{
            type: String
        }],
        validate: {
            validator: images => images.length <= 5,
            message: "A product can have at most 5 images"
        }
    },

    price: {
        amount: {
            type: Number,
            required: true
        },
        currency: {
            type: String,
            enum: ["INR", "USD"],
            default: "INR"
        }
    },

    sizes: [
        {
            size: {
                type: String,
                required: true,
                enum: ["XS", "S", "M", "L", "XL", "XXL"]
            },
            stock: {
                type: Number,
                required: true,
                min: 0,
                default: 0
            }
        }
    ],

    seller: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },

    published: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const productModel = mongoose.model("products", productSchema);

export default productModel;