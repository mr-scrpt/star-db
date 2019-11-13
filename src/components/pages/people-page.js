import React, { Component } from "react";
import Row from "../row";
import { PersonDetails, PersonList } from "../sw-components";

export default class PeoplePage extends Component {
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
          <PersonList
            onItemSelected={this.onItemSelected}
            onLoadList={this.onLoadListReady}
          />
        }
        right={<PersonDetails item={item} loaded={loaded} />}
      />
    );
  }
}
