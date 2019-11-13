import React, { Component } from "react";
import Row from "../row";
import { StarshipList, StarshipDetails } from "../sw-components";

export default class StarshipsPage extends Component {
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
          <StarshipList
            onItemSelected={this.onItemSelected}
            onLoadList={this.onLoadListReady}
          />
        }
        right={<StarshipDetails item={item} loaded={loaded} />}
      />
    );
  }
}
