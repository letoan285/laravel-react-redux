import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './views/Products';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Contact from './views/Contact';
import Sidebar from './components/Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }
  addToCart() {
    this.setState({
      orders: this.state.length + 1
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="navbar-app">
            <Navbar />

          </div>
          <div className="row">
            <div className="col-md-3 sidebar-wrapper" style={{paddingLeft: '20px'}}>
            <Sidebar />
            
            </div>

            <div className="col-md-9">
          

              <Route path="/products" exact component={Products}/>
              <Route path="/products/:id" component={ProductDetail}/>
              <Route path="/" exact component={Home}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/about-us" render={() => <h3>Something about us</h3>}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
