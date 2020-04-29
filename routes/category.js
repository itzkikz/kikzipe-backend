const express = require('express');
const {
  createCategory,
  getCategoryById,
  updateCategory,
  getAllCategories,
} = require('../controllers/category');

const router = express.Router();

router.param('categoryId', getCategoryById);

router.post('/create/category', createCategory);
router.put('/category/:categoryId', updateCategory);
router.get('/categories', getAllCategories);

module.exports = router;
