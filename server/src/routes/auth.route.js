import { Router } from 'express';
import { registerUser, loginUser, refresh, me } from '../controller/auth.controller.js';
import { registerUserValidator, loginUserValidator } from '../validators/auth.validator.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = Router();

router.post("/register", registerUserValidator, registerUser);
router.post("/login", loginUserValidator, loginUser);
router.post("/refresh", refresh);
router.get("/me", authenticate, me)

export default router;