import React, { Component } from 'react'
import axios from 'axios'

export default class ClientCreate extends Component {

  state = {
    urlCiudades: 'http://localhost:4000/api/ciudades',
    urlClient: 'http://localhost:4000/api/clientes',
    ciudades: [],
    numeroDocumento: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    idCiudades: '',
    edit: false
  }

  async componentDidMount() {
    this.getCiudades()
    if(this.props.match.params.id){
      const result = await axios.get(this.state.urlClient + "/" + this.props.match.params.id)
      this.setState({
        nombres: result.data.nombres,
        apellidos: result.data.apellidos,
        telefono: result.data.telefono,
        idCiudades: result.data.idCiudades.id,
        numeroDocumento: result.data.numeroDocumento,
        edit: true
      })
      
    }

  }

  getCiudades = async () => {
    const result = await axios.get(this.state.urlCiudades)
    this.setState({ ciudades: result.data, idCiudades: result.data[0].id })
  }

  onChangeForm = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })        
  }

  sendClient = async (e) => {
    e.preventDefault()
    const newClient = {
      nombres: this.state.nombres,
      apellidos: this.state.apellidos,
      telefono: this.state.telefono,
      idCiudad: this.state.idCiudades,
      numeroDocumento: this.state.numeroDocumento
    }
    if(this.state.edit){
      const result = await axios.put(this.state.urlClient + "/" + this.props.match.params.id, newClient)
      window.M.toast({html: result.data.message, classes:'blue accent-2'})
    }else{
      const result = await axios.post(this.state.urlClient, newClient)    
    window.M.toast({html: result.data.message, classes: 'rounded light-blue darken-4'})
    }
    
    this.props.history.push('/client-list')    
  }

  render() {
    return (
      <div className="row">
        <div className="form-group mx-auto col-md-4">
          <h1 className="title">ClientCreate</h1>
          <form onSubmit={this.sendClient}>
            <div className="form-group">
              <input onChange={this.onChangeForm} value={this.state.nombres} name="nombres" type="text" placeholder="Nombres" className="form-control" />
            </div>
            <div className="form-group">
              <input onChange={this.onChangeForm} value={this.state.apellidos} name="apellidos" type="text" placeholder="Apellidos" className="form-control" />
            </div>
            <div className="form-group">
              <input onChange={this.onChangeForm} value={this.state.numeroDocumento} name="numeroDocumento" type="text" placeholder="Numero de identificación" className="form-control" />
            </div>
            <div className="form-group">
              <input onChange={this.onChangeForm} value={this.state.telefono} name="telefono" type="text" placeholder="Telefono" className="form-control" />
            </div>
            <div className="form-group">
              <select name="idCiudades" value={this.state.idCiudades} onChange={this.onChangeForm} className="form-control">
                {this.state.ciudades.map(ciudades => (
                  <option value={ciudades.id} key={ciudades.id}>{ciudades.ciudad}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}