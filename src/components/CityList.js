import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class CityList extends Component {
  state = {
    city: [],
    url: 'http://localhost:4000/api/ciudades'
  }

  async componentDidMount() {

    this.getCity()
  }

  getCity = async () => {
    const result = await axios.get(this.state.url)
    this.setState({ city: result.data })
  }

  deleteCity = async (id) => {        
    const result = await axios.delete(this.state.url + "/" + id)
     window.M.toast({html: result.data.message, classes: 'deep-orange lighten-1'})
    this.getCity()        
  }

  render() {
    return (
      <div className="row">
        <Link to={'/city-create'} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>
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
                <div className="card-footer mx-auto">
                  <Link to={'/city-edit/' + city.id} className="btn btn-secondary">Edit</Link>
                  <button onClick={() => this.deleteCity(city.id)} className="btn btn-info ml-2">Delete</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}