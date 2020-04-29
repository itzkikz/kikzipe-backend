const CategoryModel = require('../models/category');

exports.createCategory = (req, res) => {
  const category = new CategoryModel(req.body);
  category.save((err, adddedCategory) => {
    if (err) {
      res.status(400).json({ error: 'Unable to add category' });
    }
    res.json({ message: `${adddedCategory.name} added successfully` });
  });
};

exports.getCategoryById = (req, res, next, id) => {
  CategoryModel.findById(id).exec((err, category) => {
    if (err) {
      res.status(400).json({ error: 'No Category Found' });
    }
    req.category = category;
  });
  next();
};

exports.updateCategory = (req, res) => {
  const { category } = req;
  category.name = req.body.name;
  category.save((err) => {
    if (err) {
      res.status(400).json({ error: 'Category failed to update' });
    }
    res.json({ message: 'category updated successfully' });
  });

  // Alternate Method
  // CategoryModel.findByIdAndUpdate(
  //   {
  //     id: categoryId,
  //   },
  //   { $set: req.body },
  //   { new: true, useFindAndModify: false },
  // );
};

exports.getAllCategories = (req, res) => {
  CategoryModel.find().exec((err, categories) => {
    if (err) {
      res.status(400).json({ error: 'Failed to load categories' });
    }
    res.json(categories);
  });
};
