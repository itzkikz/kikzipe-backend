const mongoose = require('mongoose');

// const { ObjectId } = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  serves: {
    type: String,
  },
  preparation_time: {
    type: String,
  },
  cooking_time: {
    type: String,
  },
  utensils: [],
  ingredients: [],
  methods: [],
  //   TODO
  //   author: {
  //     type: ObjectId,
  //     ref: 'User',
  //   },
  author: {
    type: String,
    default: 'Kikzipe',
  },
});

module.exports = mongoose.model('Recipe', recipeSchema);
