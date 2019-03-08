import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                id: 1,
                name: 'product 1',
                price: 2000,
                image: 'noimage.png'
            },
        }
    }
    render() {
        const {product} = this.state
        return (
            <div className="col-md-8 offset-2">
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
                        <button className="btn btn-sm btn-success mr-2" >Add to cart</button>
                        <Link to={`/products`} className="btn btn-sm btn-secondary mr-2">Come back</Link>
                        <button className="btn btn-sm btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;