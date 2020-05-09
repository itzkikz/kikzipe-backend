const mongoose = require('mongoose');
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

exports.getRecipe = (req, res) => {
  const { categoryId } = req.params;
  // Get the count of all users
  RecipeModel.countDocuments({ category: new mongoose.Types.ObjectId(categoryId) }, (error, count) => {
  // Get a random entry
    const random = Math.floor(Math.random() * count);

    // Again query all users but only fetch one offset by our random #
    RecipeModel.findOne({ category: new mongoose.Types.ObjectId(categoryId) }).skip(random).exec(
      (err, recipe) => {
        if (err) {
          res.status(400).json({ error: 'Failed to load recipes' });
        }
        res.json(recipe);
      },
    );
  });
};
