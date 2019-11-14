import React, { Component } from "react";
import Row from "../row";
import { PersonList, PersonDetails } from "../sw-components";
import Api from "../../services/swapi-sevices";

export default class personPage extends Component {
  state = {
    item: null,
    loaded: false
  };

  api = new Api();
  getPerson = async id => {
    try {
      const item = await this.api.getPerson(id);
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
    this.getPerson(id);
  }

  render() {
    const { item, loaded } = this.state;

    return <PersonDetails item={item} loaded={loaded} />;
  }
}
