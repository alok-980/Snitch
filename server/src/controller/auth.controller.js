import userModel from '../model/user.model.js';

export const registerUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.error("Register API error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        })
    }
}