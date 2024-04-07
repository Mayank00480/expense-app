const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/exprense');
router.post('/addExpense' , expenseController.addExpense);
router.get('/getProduct' , expenseController.getProduct);
router.delete('/deleteProduct/:id' , expenseController.deleteProduct);
module.exports = router;