import React, { Component } from 'react';
import Product from '../components/Product';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.getAllProducts();
    }
    handleIncreaseCart() {
        console.log('gawgew')
    }

    getAllProducts() {
        fetch('http://localhost:3030/api/products')
        .then(res => res.json())
        .then(data => this.setState({products: data}))
    }
    render() {
        const cartOrder = this.props.order;
        const productList = this.state.products.map((product, index) => <Product increaseCart={this.handleIncreaseCart} cartLength={cartOrder} key={index} product={product}/>)
        return (
            <div className="container-fluid">
                <div className="row">
                    {productList}
                </div>
            </div>
        );
    }
}

export default Products;