import express, { Router } from 'express';
import QuoteOfDayController from '../controllers/QuoteOfDayController';

const router = Router();
const quoteOfDayController = new QuoteOfDayController();

router.get('/', quoteOfDayController.get);

export default router;