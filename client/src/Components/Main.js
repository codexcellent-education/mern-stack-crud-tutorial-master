import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Our all component files
import ListProduct from '../Components/ListProduct';
import AddProduct from '../Components/AddProduct';
import EditProduct from '../Components/EditProduct';

class Main extends Component {

render() {
return (
<main>
<Switch>
<Route exact path='/' component={ListProduct} />
<Route path='/list' component={ListProduct} /> 
<Route path='/addproduct' component={AddProduct} />
<Route path='/editproduct/:id' component={EditProduct} />
</Switch>
</main>
);
}
}

export default Main;