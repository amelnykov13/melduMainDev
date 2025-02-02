import { getAccountInfoStudent, getChatsInfoStudent, getChatStudent, getEducationInfoStudent, getHomeInfoStudent, getNotificationsStudent, searchStudent } from '../controllers/studentController.js';
import express from 'express';

const router = express.Router();

router.get('/home', getHomeInfoStudent);
router.get('/chat', getChatsInfoStudent);
router.get('/chat/:id', getChatStudent);
router.get('/notifications', getNotificationsStudent);
router.get('/account', getAccountInfoStudent);
router.get('/education', getEducationInfoStudent);
router.get('/search', searchStudent)

export default router;