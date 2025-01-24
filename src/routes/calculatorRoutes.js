const express = require('express');
const router = express.Router();

// Debug line to check the resolved path of the controller file
console.log(require.resolve('../controllers/calculatorController'));

// Importing the controller functions
const { add, subtract, multiply, divide } = require('../controllers/calculatorController');

// Defining routes for calculator operations
router.post('/add', add);
router.post('/subtract', subtract);
router.post('/multiply', multiply);
router.post('/divide', divide);

module.exports = router;

