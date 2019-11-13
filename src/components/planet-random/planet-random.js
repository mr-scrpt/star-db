import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Api from '../../services/swapi-sevices';

import './planet-random.css';

import Spinner from '../spinner';
import PlanetRandomView from '../planet-random-view'

import ErrorContent from '../error-content';



export default class PlanetRandom extends Component {

  state = {
    planet: {},
    loading: true,
    error: false
  };

  api = new Api();

  static defaultProps = {
    updInterval: 10000
  };

  static propsType = {
    updInterval: PropTypes.number
  };

  componentDidMount() {
    const {updInterval} = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _onError = (e) => {
    this.setState({
      error: true,
      loading: false
    })
  };


  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    })
  };
  updatePlanet = async () => {
    try {
      const id = Math.floor(Math.random() * 25) + 3;
      const planet = await this.api.getPlanet(id);
      await this.onPlanetLoaded(planet);
    } catch (e) {
      this._onError(e);
    }

  };

  render() {


    const {planet, loading, error} = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorContent/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = hasData ? <PlanetRandomView planet={planet}/> : null;


    return (
      <div className="planet-random">
        <div className="planet-random__inner">
          {errorMessage}
          {spinner}
          {content}
        </div>
      </div>
    )
  }
}
