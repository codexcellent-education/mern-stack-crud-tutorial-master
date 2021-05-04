import axios from 'axios';
 
class ProductService {

deleteProduct(id) {
axios.get('http://localhost:4000/products/deleteProduct/' + id)
.then(() => {
console.log('Product Deleted !!!')
})
.catch((error) => {
console.log(error)
})
}
}

export default ProductService;