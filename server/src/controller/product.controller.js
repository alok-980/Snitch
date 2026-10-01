import productModel from '../model/product.model.js';
import { uploadFiles } from '../services/storage.service.js';

export const createProduct = async (req, res) => {
    try {
        const responses = await Promise.all(
            req.files.map((file) =>
                uploadFiles({
                    buffer: file.buffer,
                    fileName: file.originalname
                })
            )
        );

        const fileUrls = responses.map((response) => response.url);

        const product = await productModel.create({
            title: req.body.title,
            description: req.body.description,
            images: fileUrls,
            price: {
                amount: req.body.price.amount,
                currency: req.body.price.currency
            },
            sizes: req.body.sizes,
            seller: req.user.id
        })

        res.status(201).json({
            success: true,
            message: "Product created successfully.",
            data: {
                product
            }
        })
    } catch (error) {
        console.error("Create Product API error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        })
    }
}

export const listAllProduct = async (req, res) => {
    try {

    } catch (error) {
        console.error("List all Product API error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        })
    }
}

export const listAllProductToSeller = async (req, res) => {
    try {

    } catch (error) {
        console.error("List all Product to Seller API error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        })
    }
}

export const toggleProductListing = async (req, res) => {
    try {

    } catch (error) {
        console.error("Toggle product lising API error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        })
    }
}