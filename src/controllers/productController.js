const service = require("../services/productService");

exports.createProduct = async (req, res) => {
  try {
    const product = await service.createProduct(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await service.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.addReview = async (req, res) => {
  try {
    const result = await service.addReview(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.updateStock = async (req, res) => {
  try {
    const result = await service.updateStock(
      req.params.sku,
      req.body.stock
    );
    res.json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.lowStockProducts = async (req, res) => {
  try {
    const result = await service.lowStockProducts();
    res.json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
};