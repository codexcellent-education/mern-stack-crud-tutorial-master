import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
width: '300px',
margin: '0 auto'
}

class AddProduct extends Component {
constructor(props) {
super(props);
this.state = {
productName: '',
productDescription: ''
}
}

// When value changes of the fields
handleChange = (event) => {
this.setState({ [event.target.name]: event.target.value });
}

// To add new employee when user submits the form
handleSubmit = (event) => {
event.preventDefault();
const { productName, productDescription} = this.state;
axios.post('http://localhost:4000/products/addProduct', {
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
Product Description
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

export default AddProduct;