import { Router } from 'express';
import { registerUser, loginUser } from '../controller/auth.controller.js';
import { registerUserValidator, loginUserValidator } from '../validators/auth.validator.js';

const router = Router();

router.post("/register", registerUserValidator, registerUser);
router.post("/login", loginUserValidator, loginUser);

export default router;