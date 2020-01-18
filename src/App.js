import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Navigation from './components/Navigation';
import DepartmentList from './components/DepartmentList';
import Main from './components/Main';
import DepartmentCreate from './components/DepartmentCreate';
import CityList from './components/CityList';
import CityCreate from './components/CityCreate';
import Client from './components/Client';
import ClientCreate from './components/ClientCreate';
import GiroList from './components/GiroList';
import GirosCreate from './components/GirosCreate';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
      <Route path="/" exact component={Main} />
      <Route path="/department-list" component={DepartmentList} />
      <Route path="/department-create" component={DepartmentCreate} />
      <Route path="/department-edit/:id" component={DepartmentCreate} />
      <Route path="/city-list" component={CityList} />
      <Route path="/city-create" component={CityCreate} />
      <Route path="/city-edit/:id" component={CityCreate}/>
      <Route path="/client-list" component={Client}/>
      <Route path="/client-create" component={ClientCreate} />
      <Route path="/client-edit/:id" component={ClientCreate} />
      <Route path="/giros-list" component={GiroList}/>
      <Route path="/giros-create" component={GirosCreate}/>
      </div>
    </Router>
  );
}

export default App;
