import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './component/Navbar';
import Main from './component/Main';
import SecondPage from './component/Second';
import ThirdPage from './component/Third';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' exact component={Main} />
            <Route path='/second' exact component={SecondPage} />
            <Route path='/third' exact component={ThirdPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
