import React, { Component } from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import home from './Paginas/home'
import examenU1 from './Paginas/examen'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={home} />
          <Route exact path ='/examen' component={examenU1} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
