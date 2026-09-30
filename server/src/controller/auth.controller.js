import userModel from '../model/user.model.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const isExist = await userModel.findOne({ email });

        if (isExist) {
            return res.status(400).json({
                success: false,
                message: "User already exist with this email",
                errors: [
                    {
                        path: "email",
                        msg: "user already exists with this email"
                    }
                ]
            })
        }

        const user = await userModel.create({
            name,
            email,
            passwordHashed: await bcrypt.hash(password, 10);
        })

        res.status(200).json({
            success: true,
            message: "User registered successfully",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            }
        })
    } catch (error) {
        console.error("Register API error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error."
        })
    }
}