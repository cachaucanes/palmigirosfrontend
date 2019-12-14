import React, { Component } from 'react'
import axios from 'axios'

export default class City extends Component {
  state = {
    city: [],
    url: 'http://localhost:4000/api/ciudades'
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url)
    this.setState({ city: res.data })
    console.log(this.state.city);

  }

  render() {
    return (
      <div className="row">
        {
          this.state.city.map(city => (
            <div className="col-md-3 p-2" key={city.id}>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h4>{city.ciudad}</h4>                  
                </div>
                <div className="card-body">
                  <p><strong>Departamento: </strong> {city.idDepartamentos.departamento}</p>
                </div>
              </div>
            </div>
          ))
        }        
      </div>
    )
  }
}