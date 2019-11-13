import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { SwProvider } from "../api-sw";
import Header from "../header";
import PlanetRandom from "../planet-random";

import Api from "../../services/swapi-sevices";

import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import StarshipDetails from "../sw-components/details-starship";

export default class App extends Component {
  state = {
    api: new Api()
  };

  render() {
    return (
      <div>
        <SwProvider value={this.state.api}>
          <Router>
            <Header />
            <PlanetRandom updInterval={10000} />
            <Route
              path="/"
              render={() => <h2>Главная страница приложения</h2>}
              exact
            />
            <Route path="/people" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" component={StarshipsPage} exact />
            <Route path="/starships/:id" component={StarshipDetails} />
          </Router>
        </SwProvider>
      </div>
    );
  }
}
