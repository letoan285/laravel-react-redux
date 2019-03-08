import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            cart: 0,
            age: 30
        }
    }
    increaseCart (e) {
        console.log(e.name)
    }
    deleteProduct(e) {
        alert(e)
    }
    render() {
        const {product, cartLength} = this.props 
        console.log(product)
        const person = {
            name: 'toan',
            age: 30,
            status: 'single'
        }
        return (
            <div className="col-md-3 mt-3">
                <div className="card">
                    <div className="card-header">
                        <strong>{product.name}</strong>
                    </div>
                    <div className="card-body">
                        <div className="product-image text-center">
                            <a href="">
                                <img className="product-img" src={product.image}/>
                            </a>
                        </div>
                        <strong>{product.name}</strong>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-sm btn-success mr-2" onClick={(a) => this.increaseCart(person)}>Add to cart</button>
                        <Link className="btn btn-sm btn-secondary mr-2" to={`/products/${product.id}`}>Detail...</Link>
                        <button className="btn btn-sm btn-danger" onClick={(a) => this.deleteProduct(product.id)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;