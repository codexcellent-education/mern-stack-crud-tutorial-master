 // Importing important packages
 const express = require('express');
 
 // Using express and routes
 //const app = express();
 const productRoute = express.Router();
 
 // Product module which is required and imported
 let productModel = require('../Model/Product');
 
  // To Add New Product
  productRoute.route('/addProduct').post(function (req, res) {
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;

    const product = new productModel({productName,productDescription});
    product.save()
    .then(game => {
    res.status(200).json({ 'product': 'Product Added Successfully' });
    console.log({productName,productDescription});
    })
    .catch(err => {
    res.status(400).send("Something Went Wrong");
    console.log(err);
    });
    });

 // To Get List Of Eroducts
 productRoute.route('/').get(function (req, res) {
 productModel.find(function (err, product) {
 if (err) {
 console.log(err);
 }
 else {
 res.json(product);
 }
 });
 });
 
 // To Get Product Details By Product ID
 productRoute.route('/editProduct/:id').get(function (req, res) {
 let id = req.params.id;
 productModel.findById(id, function (err, product) {
 res.json(product);
 });
 }); 
 
 // To Update The Product Details
 productRoute.route('/updateProduct/:id').put(function (req, res) {
 productModel.findById(req.params.id, function (err, product) {
 if (!product)
 return next(new Error('Unable To Find Product With This Id'));
 else {
  product.productName = req.body.productName;
  product.productDescription = req.body.productDescription;
 
 product.save().then(emp => {
 res.json('Product Updated Successfully');

 })
 .catch(err => {
 res.status(400).send("Unable To Update Product");
 });
 }
 });
 });
 
 // To Delete The Product
 productRoute.route('/deleteProduct/:id').get(function (req, res) {
 productModel.findByIdAndRemove({ _id: req.params.id }, function (err, product) {
 if (err) res.json(err);
 else res.json('Product Deleted Successfully');
 });
 });
 
 module.exports = productRoute;