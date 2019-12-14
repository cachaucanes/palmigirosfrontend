import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">PalmiGiros!</h1>
          <p className="lead">This is a simple app, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">            
            <Link to="/department-list" className="btn btn-primary btn-lg">Learn more</Link>
          </p>
        </div>
      </div>
    )
  }
}