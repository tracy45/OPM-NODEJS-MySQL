'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};