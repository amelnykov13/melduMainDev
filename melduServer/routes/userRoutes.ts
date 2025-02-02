import express from 'express'
const router = express.Router();

import { getUserProfile, updateUser, deleteUser } from '../controllers/userController.js'


router.get("/profile/:username", getUserProfile);
router.put("/profile", updateUser);
router.delete("/profile", deleteUser);

export default router;