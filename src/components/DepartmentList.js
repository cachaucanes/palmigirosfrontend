import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { format } from 'timeago.js'

export default class DepartmentList extends Component {

  state = {
    departments: [],
    url: 'http://localhost:4000/api/departamentos'
  }

  async componentDidMount() {
    await this.getDepartmenList()
  }

  getDepartmenList = async () => {
    const depart = await axios.get(this.state.url)
    this.setState({ departments: depart.data }, () => {
      console.log(this.state.departments);
      
    })
    
    
  }

  render() {
    return (
      <div className="row">
        {this.state.departments.map(department => (
          <div key={department.id} className="p-2">
            <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
              <div className="card-header"><strong>{department.departamento}</strong></div>
              <div className="card-body">
                <p className="card-text"> {Date(department.created_at)} </p>
                <p className="card-text">{format(department.created_at)}</p>
              </div>
              <div className="card-footer">
                <Link className="btn btn-secondary" to={"/department-edit/"+ department.id}>Edit</Link>
                <button className="btn btn-info ml-2">Delete</button>
                
              </div>
            </div>
          </div>
        ))}
      </div>

    )
  }
}