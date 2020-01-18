import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Logo</a>          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/department-list">Department List</Link></li>
            {/* <li><Link to="/department-create">Department Create</Link></li>  */}
            <li><Link to="/city-list">City List</Link></li>                      
            <li><Link to="/client-list">Clientes List</Link></li>
            <li><Link to="/giros-list">Giros List</Link></li>            
          </ul>
        </div>
      </nav>
    )
  }
}