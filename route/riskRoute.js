import express from 'express'
import Portfolio from '../db/riskDb.js';
import { Router } from 'express';
import  { createById, createPortfolio, getSingle } from '../controller/riskController.js';

const router = express.Router();

router.get('/add', createPortfolio)
router.get('/add/:riskTolerance', getSingle)
router.get('/by/:id', createById)

export default router