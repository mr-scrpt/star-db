import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { SwProvider } from "../api-sw";
import Header from "../header";
import PlanetRandom from "../planet-random";

import Api from "../../services/swapi-sevices";

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  StarshipPage,
  PlanetPage,
  PersonPage
} from "../pages";
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
            <PlanetRandom updInterval={100000} />
            <Route
              path="/"
              render={() => <h2>Главная страница приложения</h2>}
              exact
            />
            <Route path="/people/:id?" component={PeoplePage} exact />
            <Route path="/planets" component={PlanetsPage} exact />
            <Route path="/starships" component={StarshipsPage} exact />

            <Route
              path="/planets/:id"
              render={({ match }) => {
                return <PlanetPage id={match.params.id} />;
              }}
            />
            <Route
              path="/starships/:id"
              render={({ match }) => {
                return <StarshipPage id={match.params.id} />;
              }}
            />
          </Router>
        </SwProvider>
      </div>
    );
  }
}
