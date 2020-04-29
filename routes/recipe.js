const express = require('express');
const { createRecipe, getAllRecipes } = require('../controllers/recipe');

const router = express.Router();

router.post('/create/recipe', createRecipe);

router.get('/recipes', getAllRecipes);

module.exports = router;
