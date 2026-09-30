import userModel from '../model/user.model.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/auth.utils.js';

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
            passwordHashed: await bcrypt.hash(password, 10)
        })

        const { accessToekn, refreshToken } = generateToken({ userId: user._id, role: user.role })

        await userModel.findByIdAndUpdate(user._id, {
            refreshToken
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: "User registered successfully",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                accessToekn
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

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const isMatched = await bcrypt.compare(password, user.passwordHashed);

        if (!isMatched) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const { accessToekn, refreshToken } = generateToken({ userId: user._id, role: user.role });

        await userModel.findByIdAndUpdate(user._id, {
            refreshToken
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: "Login successfully",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                accessToekn
            }
        })
    } catch (error) {
        console.error("Login API error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}