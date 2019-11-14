import React, { Component } from "react";
import Row from "../row";
import { PersonDetails, PersonList } from "../sw-components";
import { withRouter } from "react-router-dom";
import Api from "../../services/swapi-sevices";
class PeoplePage extends Component {
  state = {
    item: null,
    loaded: false,
    id: null
  };

  api = new Api();

  onLoadListReady = () => {
    if (!this.state.loaded) {
      this.setState({ loaded: true });
    }
  };
  setItem = async id => {
    try {
      const item = await this.api.getPerson(id);
      console.log(item);

      this.setState({ item });
    } catch (e) {}
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.setState({ id });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.setItem(this.state.id);
    }
  }
  render() {
    const { item, loaded } = this.state;
    const { history } = this.props;
    return (
      <Row
        left={
          <PersonList
            onItemSelected={({ id }) => {
              history.push(id);
              this.setState({ id });
            }}
            onLoadList={this.onLoadListReady}
          />
        }
        right={<PersonDetails item={item} loaded={loaded} />}
      />
    );
  }
}

export default withRouter(PeoplePage);
