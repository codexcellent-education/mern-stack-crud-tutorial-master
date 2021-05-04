import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
// To use routing functionalities
import { Link } from 'react-router-dom';
import '../index.css';
import productService from './Services';
//import EditProduct from './EditProduct';

var divStyle = {
margin: '8% 8%',
};

class ListProduct extends Component {

constructor(props) {
super(props);
this.productService = new productService();
this.state = {
products: []
}
this.deleteProduct = this.deleteProduct.bind(this);
}

componentDidMount = () => {
this.getProductList();
}

// To get all the employees
getProductList() {
axios.get('http://localhost:4000/products')
.then((response) => {
console.log(response);
this.setState({
products: response.data
});
})
.catch((error) => {
console.log(error);
})
}

// To delete any employee
deleteProduct(empid) {
this.productService.deleteProduct(empid);
this.getProductList();
}

render() {
const { products } = this.state;
return (
<div style={divStyle}>
<Table responsive>
<thead>
<tr>
<th>#</th>
<th>Product Name</th>
<th>Product Description</th>
</tr>
</thead>
<tbody>
{
products && products.map((product, i) => {
return (
<tr key={i}>
<td>{i}</td>
<td>{product.productName}</td>
<td>{product.productDescription}</td>
<td>
<Link to={"editproduct/" + product._id} className="btn btn-primary">Edit</Link>
</td>
<td>
<Button onClick={() => this.deleteProduct(product._id)} bsStyle="danger" >Delete</Button>
</td>
</tr>
)
})
}
</tbody>
</Table>
</div>
);
} 
}

export default ListProduct;