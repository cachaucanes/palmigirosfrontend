import React, { Component } from 'react'
import axios from 'axios'


export default class GirosCreate extends Component {

  state = {
    urlCiudades: 'http://localhost:4000/api/ciudades',
    urlClientes: 'http://localhost:4000/api/clientes',
    fecha: new Date(),
    idClienteEmisor: '',
    idCiudadEmisor: '',
    idClienteReceptor: '',
    idCiudadReceptor: '',
    monto: '',
    ciudades: [],
    clientes: []
  }

  componentDidMount() {
    this.getClientes()
    this.getCiudades()
    
  }

  getCiudades = async () => {
    const result = await axios.get(this.state.urlCiudades)
    this.setState({ ciudades: result.data })

  }

  getClientes = async () => {
    const result = await axios.get(this.state.urlClientes)
    this.setState({ clientes: result.data })
    console.log(this.state.clientes);
    
  }

  onChange = () => {

  }


  render() {
    return (
      <div className="row">
        <div className="form-group mx-auto col-md-4">
          <h1 className="title">GirosCreate</h1>
          <form>
            <div className="form-group">
              <label htmlFor="">Emisor: </label>
              <select className="form-control">
                {
                  this.state.clientes.map(cliente => (
                    <option key={cliente.id} value={cliente.id}>{cliente.nombres}</option>
                  ))
                }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Monto: </label>
              <input placeholder="Monto" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Ciudad Emisora: </label>
              <select className="form-control">
                {
                  this.state.ciudades.map(ciudad => (
                    <option value={ciudad.id} key={ciudad.id}>{ciudad.ciudad}</option>

                  ))
                }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Receptor: </label>
              <select className="form-control">
                {
                  this.state.clientes.map(cliente => (
                    <option key={cliente.id} value={cliente.id}>{cliente.nombres}</option>
                  ))
                }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="">Ciudad Receptora</label>
              <select className="form-control">
                {
                  this.state.ciudades.map(ciudad => (
                    <option key={ciudad.id} value={ciudad.id}>{ciudad.ciudad}</option>
                  ))
                }
              </select>
            </div>

            <div className="form-group">
              <button className="btn btn-primary">Send</button>
            </div>

          </form>
        </div>
      </div>
    )
  }
}