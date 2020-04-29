const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    max: 30,
    required: true,
  },
  description: {
    type: String,
  },
  color_code: {
    type: String,
  },
});

module.exports = mongoose.model('Category', categorySchema);
