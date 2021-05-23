const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Alpinestar',
  },
  {
    tag_name: 'Michelin',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'AGV',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
