import React from "react";
import ItemList from "../item-list";
import {
  withData,
  withSwapi,
  compose,
  withChildFunction
} from "../hoc-helpers";

const tplToAll = ({ name }) => <span> {name} </span>;
const tplStarship = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsToProps = api => {
  return {
    getData: api.getAllPeople
  };
};

const mapPlanetMethodsToProps = api => {
  return {
    getData: api.getAllPlanets
  };
};

const mapStarshipMethodsToProps = api => {
  return {
    getData: api.getAllStarships
  };
};

const PersonList = compose(
  withSwapi(mapPersonMethodsToProps),
  withData,
  withChildFunction(tplToAll)
)(ItemList);

const PlanetList = compose(
  withSwapi(mapPlanetMethodsToProps),
  withData,
  withChildFunction(tplToAll)
)(ItemList);

const StarshipList = compose(
  withSwapi(mapStarshipMethodsToProps),
  withData,
  withChildFunction(tplStarship)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
