import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import Navigation from './components/Navigation';
import DepartmentList from './components/DepartmentList';
import Main from './components/Main';
import DepartmentCreate from './components/DepartmentCreate';
import City from './components/City';

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
      <Route path="/" exact component={Main} />
      <Route path="/department-list" component={DepartmentList} />
      <Route path="/department-create" component={DepartmentCreate} />
      <Route path="/department-edit/:id" component={DepartmentCreate} />
      <Route path="/city-list" component={City} />
      </div>
    </Router>
  );
}

export default App;
