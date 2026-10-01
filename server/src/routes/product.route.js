import { Router } from 'express';
import { createProduct, listAllProduct, listAllProductToSeller, toggleProductListing } from '../controller/product.controller.js';
import { authenticate, isSeller } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/', authenticate, isSeller, createProduct);
router.get('/', listAllProduct),
router.get('/', authenticate, isSeller, listAllProductToSeller);
router.patch('/', authenticate, isSeller, toggleProductListing);

export default router;