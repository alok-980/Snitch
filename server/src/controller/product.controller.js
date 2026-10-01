import productModel from '../model/product.model.js';

export const createProduct = async (req, res) => {
    try {

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
        console.error("Lst all Product API error:", error.message);
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