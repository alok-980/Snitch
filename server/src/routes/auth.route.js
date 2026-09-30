import { Router } from 'express';
import { registerUser } from '../controller/auth.controller.js';
import { registerUserValidator } from '../validators/auth.validator.js';

const router = Router();

router.post("/register", registerUserValidator, registerUser);

export default router;