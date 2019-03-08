
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './sidebar.scss';

class Sidebar extends Component {
    render() {
        return (
        <div className="sidenav">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/clients">Clients</Link>
          <Link to="/contact">Contact</Link>
        </div>
        );
    }
}
export default Sidebar;