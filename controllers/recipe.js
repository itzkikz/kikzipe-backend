const RecipeModel = require('../models/recipe');

exports.createRecipe = (req, res) => {
  const recipe = new RecipeModel(req.body);
  recipe.save((err) => {
    if (err) {
      res.status(400).json({ error: 'Failed to add recipe' });
    }
    res.json({ message: 'Recipe added successfully' });
  });
};

exports.getAllRecipes = (req, res) => {
  RecipeModel.find().exec((err, allRecipes) => {
    if (err) {
      res.status(400).json({ error: 'Failed to load recipes' });
    }
    res.json(allRecipes);
  });
};
