import { portfolioData } from '../models/portfolioModel.js'

export const getPortfolio = (_req, res) => res.json({ success: true, data: portfolioData })

export const getExperience = (_req, res) => res.json({ success: true, data: portfolioData.experience })

export const getSkills = (_req, res) => res.json({ success: true, data: portfolioData.skills })

export const getAwards = (_req, res) => res.json({ success: true, data: portfolioData.awards })

export const getCertifications = (_req, res) => res.json({ success: true, data: portfolioData.certifications })
