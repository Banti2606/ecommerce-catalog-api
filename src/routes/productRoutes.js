const express = require("express");

const router = express.Router();

const controller = require("../controllers/productController");

router.post("/products", controller.createProduct);

router.get("/products", controller.getProducts);

router.post("/products/:id/review", controller.addReview);

router.patch("/products/stock/:sku", controller.updateStock);

router.get("/products/low-stock", controller.lowStockProducts);

module.exports = router;