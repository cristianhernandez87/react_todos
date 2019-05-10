import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Navigation from './components/Navigation';
import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App pb-5">
        <div className="container-fluid navbar navbar-dark bg-dark">
          <div className="row text-center justify-content-center w-100">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="col-12 text text--color--white">Lorem Ipsum</p>
          </div>
        </div>
        <div className="container col-md-6 mx-md-auto my-5">
          <TodoForm onAddTodo={this.handleAddTodo} />
        </div>
        <div className="container">
          <Navigation />
        </div>
      </div>
    )
  }
}


export default App;
