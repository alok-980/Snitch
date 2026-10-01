import { verifyAccessToken } from "../utils/auth.utils.js";

export const authenticate = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization;

        if (!accessToken || !accessToken.startWith("Bearer")) {
            return res.status(400).json({
                success: false,
                message: "Token required"
            })
        }

        accessToken = accessToken.split(" ")[1];

        const decoded = await verifyAccessToken(accessToken);

        req.user = decoded;

        next();

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }
}

export const isSeller = (req, res, next) => {
    if (req.user.role !== "seller") {
        return res.status(401).json({
            success: false,
            message: "Unauthorized, you dont have right's to do this."
        })
    }
    next();
}