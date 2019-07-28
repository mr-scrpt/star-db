import React, {Component} from 'react';

import {SwProvider} from '../api-sw';
import Header from '../header';
import PlanetRandom from '../planet-random';
import ErrorContent from "../error-content";
import Row from '../row';
import Api from "../../services/swapi-sevices";


import {
  PlanetList,
  PersonList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';


export default class App extends Component {
  state = {
    api: new Api(),
    item: null

  };
  onItemSelected = (item)=> {
    this.setState({item})
  };

  render() {
    const {appError} = this.state;

    if (appError) {
      return <ErrorContent/>
    }


    const item = {
      "birth_year": "19 BBY",
      "eye_color": "Blue",
      "films": [
        "https://swapi.co/api/films/1/"
      ],
      "gender": "Male",
      "hair_color": "Blond",
      "height": "172",
      "homeworld": "https://swapi.co/api/planets/1/",
      "mass": "77",
      "name": "Luke Skywalker",
      "skin_color": "Fair",
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-10T13:52:43.172000Z",
      "species": [
        "https://swapi.co/api/species/1/"]
    };


    return (
      <div>
        <SwProvider value={this.state.api}>
          <Header/>
          <PlanetRandom />
          <Row
            left={<PersonList onItemSelected={this.onItemSelected}/>}
            right={<PersonDetails item={this.state.item}/>}
          />

          <Row
            left={<StarshipList onItemSelected={this.onItemSelected}/>}
            right={<PersonDetails item={this.state.item}/>}
          />

          <Row
            left={<PlanetList onItemSelected={this.onItemSelected}/>}
            right={<PersonDetails item={this.state.item}/>}
          />

        </SwProvider>
      </div>
    )
  }
}