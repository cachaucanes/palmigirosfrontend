import React, { Component } from 'react'
import axios from 'axios'

export default class DepartmentCreate extends Component {

  state = {
    departamento: '',
    created_at: new Date(),
    id: '',
    edit: false,
    url: 'http://localhost:4000/api/departamentos'
  }

  onChange = (e) => {
    this.setState({ departamento: e.target.value })
  }

  async componentDidMount() {
    if (this.props.match.params.id) {
      const res = await axios.get(this.state.url + '/' + this.props.match.params.id)
      this.setState({
        departamento: res.data.departamento,
        id: res.data.id,
        created_at: res.data.created_at,
        edit: true
      })
    }
  }

  SendDepartment = async (e) => {
    e.preventDefault()
    const newDepart = {
      departamento: this.state.departamento,
      created_at: this.state.created_at
    }            
    if(this.state.edit){
      const result = await axios.put(this.state.url + '/' + this.state.id, newDepart)
      window.M.toast({html: result.data.message, classes: 'blue accent-2'})    
    }else{
      const result = await axios.post(this.state.url, newDepart)
      window.M.toast({html: result.data.message, classes: 'rounded light-blue darken-4 title'})
    }
    this.props.history.push('/department-list'); //Para no recargar la pagina        
  }

  render() {
    return (
      <div className="col-md-6 mx-auto mt-5">
        <h1 className="title">Register Department</h1>
        <form onSubmit={this.SendDepartment}>
          <div className="form-group">
            <input autoFocus value={this.state.departamento} onChange={this.onChange} placeholder="Name department" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    )
  }
}