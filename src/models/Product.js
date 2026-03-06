const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  sku: {
    type: String,
    required: true,
    unique: true
  },
  color: String,
  price: Number,
  stock: Number
});

const reviewSchema = new mongoose.Schema({
  userId: String,
  rating: Number,
  comment: String
});

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  variants: [variantSchema],
  reviews: [reviewSchema],
  avgRating: Number
});

productSchema.index({ category: 1 });
productSchema.index({ "variants.sku": 1 });
productSchema.index({ avgRating: -1 });

module.exports = mongoose.model("Product", productSchema);