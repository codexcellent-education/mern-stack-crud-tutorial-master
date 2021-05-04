const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Product = new Schema({
productName: {
type: String
},
productDescription: {
type: String
},
});

module.exports = mongoose.model('Product', Product);