import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
width: '300px',
margin: '0 auto'
}

class EditProduct extends Component {
constructor(props) {
super(props);
this.state = {
    productName: '',
    productDescription: ''
}
}

componentDidMount = () => {
this.getProductById();
}

// To get employee based on ID
getProductById() {
axios.get('http://localhost:4000/products/editProduct/' + this.props.match.params.id)
.then((response) => {
this.setState({
    productName: response.data.productName,
    productDescription: response.data.productDescription
});
})
.catch((error) => {
console.log(error);
})
}

handleChange = (event) => {
this.setState({ [event.target.name]: event.target.value });
}

// To update the record on submit
handleSubmit = (event) => {
event.preventDefault();
const { productName, productDescription } = this.state;
axios.put('http://localhost:4000/products/updateProduct/' + this.props.match.params.id, {
    productName: productName,
    productDescription: productDescription
})
.then((response) => {
console.log(response);
this.props.history.push('/');
})
.catch((error) => {
console.log(error);
});

}

render() {
return (
<div className="container">
<form style={customStyle} onSubmit={this.handleSubmit}>
<label>
Product Name
<input
name="productName"
type="text"
value={this.state.productName}
onChange={this.handleChange}
className="form-control"
/>
</label>
<br />
<label>
PRODUCT Description
<input
name="productDescription"
type="text"
value={this.state.productDescription}
onChange={this.handleChange}
className="form-control"
/>
</label>
<br />
<br />
<input
type="submit"
value="submit"
className="btn btn-primary"
/>
</form>
</div>
);
}
}

export default EditProduct;