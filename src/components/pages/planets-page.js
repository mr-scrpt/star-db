import React, { Component } from "react";
import Row from "../row";
import { PlanetList, PlanetDetails } from "../sw-components";

export default class PlanetsPage extends Component {
  state = {
    item: null,
    loaded: false
  };

  onItemSelected = item => {
    this.setState({ item });
  };
  onLoadListReady = () => {
    if (!this.state.loaded) {
      this.setState({ loaded: true });
    }
  };
  render() {
    const { item, loaded } = this.state;

    return (
      <Row
        left={
          <PlanetList
            onItemSelected={this.onItemSelected}
            onLoadList={this.onLoadListReady}
          />
        }
        right={<PlanetDetails item={item} loaded={loaded} />}
      />
    );
  }
}
