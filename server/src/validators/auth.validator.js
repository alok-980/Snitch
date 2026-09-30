import { body, validationResult } from 'express-validator';

export const registerUserValidator = [
    body('name')
        .exists().withMessage("Name is required").bail()
        .isString().withMessage("Name must be a String").bail()
        .trim()
        .isLength({ min: 2, max: 30 }).withMessage("Name must be between 2 to 30 characters"),

    body('email')
        .exists().withMessage("Email is required").bail()
        .isString().withMessage("Email must be a String").bail()
        .trim()
        .isEmail().withMessage("Enter a valid email"),

    body('password')
        .exists().withMessage("Password is required").bail()
        .isString().withMessage("Password must be a String").bail()
        .trim()
        .isLength({ min: 6 }).withMessage("Password must be 6 characters long"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Invalid request",
                errors: errors.array()
            })
        }

        next();
    }
]

export const loginUserValidator = [
    body('email')
        .exists().withMessage("Email is required").bail()
        .isString().withMessage("Email must be a String").bail()
        .trim()
        .isEmail().withMessage("Enter a valid email"),

    body('password')
        .exists().withMessage("Password is required").bail()
        .isString().withMessage("Password must be a String").bail()
        .trim()
        .isLength({ min: 6 }).withMessage("Password must be 6 characters long"),

    (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Invalid request",
                errors: errors.array()
            })
        }

        next();
    }
]