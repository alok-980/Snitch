import { Router } from 'express';
import { createProduct, listAllProduct, listAllProductToSeller, toggleProductListing } from '../controller/product.controller.js';
import { authenticate, isSeller } from '../middleware/auth.middleware.js';
import { parseProductData } from '../middleware/product.middleware.js';
import { createProductValidator } from '../validators/product.validation.js';
import uploads from '../config/multer.js'

const router = Router();

router.post('/',
    authenticate,
    isSeller,
    uploads.array("images"),
    parseProductData,
    createProductValidator,
    createProduct
);

router.get('/', listAllProduct);
router.get('/seller', authenticate, isSeller, listAllProductToSeller);
router.patch('/toggle', authenticate, isSeller, toggleProductListing);

export default router;