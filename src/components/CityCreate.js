import React, { Component } from 'react'
import axios from 'axios'
/* import PropTypes from 'prop-types' */
/* import {ToastsContainer, ToastsStore} from 'react-toasts' */

export default class CityCreate extends Component {

  /* static PropTypes = {
    id: PropTypes.number.isRequired
  } */

  state = {
    idDepartamentos: '',
    ciudad: '',
    urlDepart: 'http://localhost:4000/api/departamentos',
    urlCity: 'http://localhost:4000/api/ciudades',
    departamentos: [],
    edit: false
  }

  async componentDidMount() {
    const result = await axios.get(this.state.urlDepart)
    this.setState({ departamentos: result.data, idDepartamentos: result.data[0].id })
    if (this.props.match.params.id) {
      const result = await axios.get(this.state.urlCity + "/" + this.props.match.params.id)
      this.setState({
        idDepartamentos: result.data.idDepartamentos.id,
        ciudad: result.data.ciudad,
        edit: true
      })
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }



  send = async (e) => {
    e.preventDefault()
    const newCity = {
      ciudad: this.state.ciudad,
      idDepartamento: this.state.idDepartamentos
    }
    if (this.state.edit) {
      const result = await axios.put(this.state.urlCity + "/" + this.props.match.params.id, newCity)
      window.M.toast({html: result.data.message, classes: 'blue accent-2'})
    } else {
      const result = await axios.post(this.state.urlCity, newCity)
      window.M.toast({ html: result.data.message, classes: 'rounded light-blue darken-4' })
    }

    this.props.history.push('/city-list')
  }

  render() {
    return (
      <div className="row">
        <div className="form-group mx-auto col-md-4">
          <h1 className="title">CityCreate</h1>

          <form onSubmit={this.send} className="mt-4">
            <div className="form-group">
              <select name="idDepartamentos" value={this.state.idDepartamentos} onChange={this.onChange} className="form-control">
                {this.state.departamentos.map(depart => (
                  <option value={depart.id} key={depart.id}>{depart.departamento}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <input value={this.state.ciudad} name="ciudad" onChange={this.onChange} placeholder="Nombre city" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}