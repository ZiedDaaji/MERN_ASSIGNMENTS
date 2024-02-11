const Product = require("../models/product.model")

//read all
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json(allProducts)})
        .catch((err) => console.log(err))
        }

//creat

module.exports.creatProduct = (req, res) => {
    Product.create(req.body)
    .then((newProduct) => {
        res.json(newProduct)})
    .catch((err) => console.log(err))
}

//Get one Product
module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then((oneProduct) => {
        res.json(oneProduct)})
    .catch((err) => console.log(err))
}

//update Product
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then((updateOneProduct) => {
        res.json(updateOneProduct)})
    .catch((err) => console.log(err))
}

//delet Product
module.exports.deleteOneProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(result => {
        res.json(result)})
    .catch((err) => console.log(err))
}

