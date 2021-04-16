const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
// GET all products from db
router.get("/", productController.getAllProducts);
// GET product by id from db
router.get("/:id", productController.getProductById);
// POST product
router.post("/", (req, res) => {});
// PUT product
router.put("/:id", (req, res) => {});
// DELETE product
router.delete("/", (req, res) => {});
module.exports = router;
