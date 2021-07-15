// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {
    key: "product_id",
    allowNull: false,
  },
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: {
    key: "category_id",
    allowNull: false,
  },
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: "product_tags",
  foreignKey: "product_id",
  as: "tags",
  onDelete: "cascades",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: "product_tags",
  foreignKey: "tag_id",
  as: "tags",
});
// productTag belongs to product
ProductTag.belongsTo(Product,{
  foreignKey:'product_id',
  as:'products',
});

ProductTag.belongsTo(Tag,{
  foreignKey:'tag_id',
  as:'products',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
