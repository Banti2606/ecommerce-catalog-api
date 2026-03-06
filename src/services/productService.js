const repo = require("../repositories/productRepository");

exports.createProduct = async (data) => {
  return repo.createProduct(data);
};

exports.getProducts = async () => {
  return repo.getProducts();
};

exports.addReview = async (id, review) => {
  return repo.addReview(id, review);
};

exports.updateStock = async (sku, stock) => {
  return repo.updateStock(sku, stock);
};

exports.lowStockProducts = async () => {
  return repo.lowStockProducts(10);
};