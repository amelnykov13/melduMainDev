import { getAccountInfoTutor, getChatsInfoTutor, getChatTutor, getEducationInfoTutor, getHomeInfoTutor, getNotificationsTutor } from '../controllers/tutorController.js';
import express from 'express';

const router = express.Router();

router.get('/home', getHomeInfoTutor);
router.get('/chat', getChatsInfoTutor);
router.get('/chat/:id', getChatTutor);
router.get('/notifications', getNotificationsTutor);
router.get('/account', getAccountInfoTutor);
router.get('/education', getEducationInfoTutor);

export default router;