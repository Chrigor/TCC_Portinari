const { Router } = require('express');
const productController = require('./Controllers/productController');
const categoriasController = require('./Controllers/categoriasController');

const routes = Router();

routes.get("/products", productController.getAllProducts);
routes.get("/products/categoria/:categoria", productController.getProductsByCategory);
routes.post("/products", productController.storeProduct);

routes.get("/categorias", categoriasController.getAllCategorias);
routes.post("/categorias", categoriasController.storeCategoria);


module.exports = routes;