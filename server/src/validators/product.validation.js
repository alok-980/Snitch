import { body, validationResult } from 'express-validator';

export const createProductValidator = [
    body('title')
        .exists().withMessage("Product title is required").bail()
        .isString().withMessage("Product title must be a string").bail()
        .trim()
        .isLength({ min: 3, max: 100 }).withMessage("Product title must be between 3 to 100 characters"),

    body('description')
        .exists().withMessage("Product description is required").bail()
        .isString().withMessage("Product description must be a string").bail()
        .trim()
        .isLength({ min: 10, max: 500 }).withMessage("Product description must be between 10 to 500 characters"),

    body('price.amount')
        .exists().withMessage("Product price is required").bail()
        .isFloat({ min: 0 }).withMessage("Product price must be a positive number").bail(),

    body('price.currency')
        .optional()
        .exists().withMessage("Product currency is required").bail()
        .isString().withMessage("Product currency must be a string").bail()
        .trim()
        .isLength({ min: 3, max: 3 }).withMessage("Product currency must be a 3-character ISO code")
        .isIn(["INR", "USD"]).withMessage("Product currency must be either INR or USD"),

    body('sizes')
        .optional()
        .isArray().withMessage("Product sizes must be an array").bail(),

    body('sizes.*.size')
        .exists().withMessage("Product size is required").bail()
        .isString().withMessage("Product size must be a string").bail()
        .isIn(["XS", "S", "M", "L", "XL", "XXL"]).withMessage("Product size must be one of XS, S, M, L, XL, XXL"),

    body('sizes.*.stock')
        .exists().withMessage("Product stock is required").bail()
        .isInt({ min: 0 }).withMessage("Product stock must be a positive integer").bail(),

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