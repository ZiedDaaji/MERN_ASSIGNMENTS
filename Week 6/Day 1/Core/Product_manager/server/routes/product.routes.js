const ProductController = require("../controllers/product.controller")

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts)
    app.get("/api/products/:id", ProductController.getOneProduct)
    app.post("/api/products", ProductController.creatProduct)
    app.patch("/api/products/:id", ProductController.updateProduct)
    app.delete("/api/products/:id", ProductController.deleteOneProduct)
}