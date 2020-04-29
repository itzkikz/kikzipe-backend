const express = require('express');
const { createRecipe } = require('../controllers/recipe');

const router = express.Router();

router.post('/create/recipe', createRecipe);

module.exports = router;
