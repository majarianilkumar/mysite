import { Router } from 'express'
import { body } from 'express-validator'
import { submitContact } from '../controllers/contactController.js'

const router = Router()

const contactValidation = [
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
]

router.post('/', contactValidation, submitContact)

export default router
