import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import NotFound from './components/NotFound';

import PokemonState from './context/pokemon/PokemonState';
import './App.css';

function App() {
  return (
    <PokemonState>
      <Router>
        <Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/pokemon/:id" component={Pokemon} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </PokemonState>
  );
}

export default App;
