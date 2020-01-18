import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Client extends Component {

  state = {
    url: 'http://localhost:4000/api/clientes',
    client: []
  }

  componentDidMount() {
    this.getClient()
  }

  getClient = async () => {
    const result = await axios.get(this.state.url)
    this.setState({ client: result.data })
  }

  onDelete = async (id) => {
    try {
      const result = await axios.delete(this.state.url + "/" + id)
      window.M.toast({ html: result.data.message, classes: 'deep-orange lighten-1' })
      this.getClient()
    } catch (error) {
      console.log(error);      
    }
  }

  render() {
    return (
      <div>
        <div className="center">
          <h1 className="title">Clientes</h1>
        </div>
        <div className="row">
          <Link to={'/client-create'} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>
          {this.state.client.map(client => (
            <div key={client.id} className="col-md-3 p-2">

              <div className="card">
                <div className="card-header">
                  <h4>{client.nombres} {client.apellidos}</h4>
                </div>
                <div className="card-body">
                  <h6>CC: {client.numeroDocumento} - {client.idCiudades.ciudad}, {client.idCiudades.idDepartamentos.departamento} </h6>
                  <h6>Tel: {client.telefono}</h6>
                </div>
                <div className="card-footer">
                  <Link to={'/client-edit/' + client.id} className="btn btn-info">Edit</Link>
                  <button onClick={() => this.onDelete(client.id)} className="btn btn-primary ml-2">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}