import React, { Component } from "react";
import Row from "../row";
import { PlanetList, PlanetDetails } from "../sw-components";
import Api from "../../services/swapi-sevices";

export default class StarshipPage extends Component {
  state = {
    item: null,
    loaded: false
  };

  api = new Api();
  getPlanet = async id => {
    try {
      const item = await this.api.getPlanet(id);
      this.setState({ item });
    } catch (e) {}
  };
  onItemSelected = item => {
    this.setState({ item });
  };
  onLoadListReady = () => {
    if (!this.state.loaded) {
      this.setState({ loaded: true });
    }
  };
  componentDidMount() {
    const { id } = this.props;
    this.getPlanet(id);
  }

  render() {
    const { item, loaded } = this.state;

    return <PlanetDetails item={item} loaded={loaded} />;
  }
}
