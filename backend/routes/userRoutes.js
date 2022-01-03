import express from 'express'
const router = express.Router()
import {
    authUser,
    registerUser,
    getUserProfile,
    forgotPassword,
    verifyEmail
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/signup').get(protect, getUserProfile)
router.route('/verify-email').get(verifyEmail)
router.route('/forgot-password').post(forgotPassword)

export default router