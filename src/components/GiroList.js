import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../App.css'

export default class GiroList extends Component {

  state = {
    url: 'http://localhost:4000/api/giros',
    giros: []
  }

  componentDidMount() {
    this.getGiros()


  }

  getGiros = async () => {
    const result = await axios.get(this.state.url)
    this.setState({ giros: result.data })
    console.log(this.state.giros);
    this.collapsible()
  }

  collapsible = () => {
    var elems = document.querySelectorAll('.collapsible');
    window.M.Collapsible.init(elems);

  }

  render() {
    return (
      <div>
        <div className="center">
        <Link to={'/giros-create'} className="left btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>
          <h2 className="title">GirosList</h2>
        </div>
        
        <div className="row">

          {this.state.giros.map(giros => (
            <div className="card " key={giros.id}>
              <div className="card-header">
                <h5>{giros.fecha}</h5>
                <h5>Monto:  ${giros.monto}</h5>
                <h5><strong>Estado: </strong>{giros.estado ? 'Activo' : 'Inactivo'}</h5>

              </div>
              <div className="card-body pb-0 grey lighten-3">
                <ul className="collapsible">
                  <li>
                    <div className="collapsible-header">
                      <i className="material-icons">insert_emoticon</i>
                      <p className="m-0"><strong>Receptor: </strong>{giros.idClienteReceptores.nombres} {giros.idClienteReceptores.apellidos}</p>
                      <i className="material-icons">arrow_drop_down</i>
                    </div>
                    <div className="collapseBody1 collapsible-body">
                      <p><strong>Número Documento: </strong>{giros.idClienteReceptores.numeroDocumento}</p>
                      <p><strong>Tel: </strong>{giros.idClienteReceptores.telefono}</p>
                      <p><strong>Ciudad de origen: </strong>{giros.idClienteReceptores.idCiudades.ciudad}</p>
                      <p><strong>Ciudad receptora: </strong>{giros.idCiudadReceptora.ciudad}</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <i className="material-icons">face</i>
                      <p className="m-0"><strong>Emisor: </strong>{giros.idClienteEmisores.nombres} {giros.idClienteEmisores.apellidos}</p>
                      <i className="material-icons">arrow_drop_down</i>
                    </div>
                    <div className="collapseBody1 collapsible-body">
                      <p><strong>Número Documento: </strong>{giros.idClienteEmisores.numeroDocumento}</p>
                      <p><strong>Tel: </strong>{giros.idClienteEmisores.telefono}</p>
                      <p><strong>Ciudad de origen </strong>{giros.idClienteEmisores.idCiudades.ciudad}</p>
                      <p><strong>Ciudad emisora: </strong>{giros.idCiudadEmisora.ciudad}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <button className="btn btn-info">Edit</button>
                <button className="ml-2 btn btn-primary">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}