const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Helmets',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Jackets',
  },
  {
    category_name: 'Tires',
  },
  {
    category_name: 'Boots',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
