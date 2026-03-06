import { Router } from 'express'
import {
  getPortfolio,
  getExperience,
  getSkills,
  getAwards,
  getCertifications,
} from '../controllers/portfolioController.js'

const router = Router()

router.get('/', getPortfolio)
router.get('/experience', getExperience)
router.get('/skills', getSkills)
router.get('/awards', getAwards)
router.get('/certifications', getCertifications)

export default router
