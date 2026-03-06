const Product = require("../models/Product");

exports.createProduct = (data) => Product.create(data);

exports.getProducts = () => Product.find();

exports.addReview = (id, review) =>
  Product.findByIdAndUpdate(
    id,
    { $push: { reviews: review } },
    { new: true }
  );

exports.updateStock = (sku, stock) =>
  Product.updateOne(
    { "variants.sku": sku },
    { $set: { "variants.$.stock": stock } }
  );

exports.lowStockProducts = (limit) =>
  Product.aggregate([
    { $unwind: "$variants" },
    { $match: { "variants.stock": { $lt: limit } } }
  ]);