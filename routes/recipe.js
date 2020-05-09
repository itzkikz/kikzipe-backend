const express = require('express');
const { createRecipe, getAllRecipes, getRecipe } = require('../controllers/recipe');

const router = express.Router();

router.post('/create/recipe', createRecipe);

router.get('/recipes', getAllRecipes);

router.get('/recipe/:categoryId', getRecipe);


module.exports = router;
