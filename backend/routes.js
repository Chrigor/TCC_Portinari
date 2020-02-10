const { Router } = require('express');
const productController = require('./Controllers/productController');

const routes = Router();

routes.get("/products", productController.getAllProducts);
routes.get("/products/categoria/:categoria", productController.getProductsByCategory);
routes.post("/products", productController.storeProduct);


module.exports = routes;