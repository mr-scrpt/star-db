import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapi} from '../hoc-hepers';


const withChildFunction = (Component, child) => {
  return (props) => {
    return <Component {...props}>{child}</Component>
  }
};

const tplToAll = ({name}) => <span> {name} </span>;
const tplStarshop = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (api) => {
  return{
    getData: api.getAllPeople
  }
};

const mapPlanetMethodsToProps = (api) => {
  return{
    getData: api.getAllPlanets
  }
};

const mapStarshipMethodsToProps = (api) => {
  return{
    getData: api.getAllStarships
  }
};

const PersonList = withSwapi(
  withData(withChildFunction(ItemList, tplToAll)),
  mapPersonMethodsToProps
);

const PlanetList = withSwapi(
  withData(withChildFunction(ItemList, tplToAll)),
  mapPlanetMethodsToProps
);

const StarshipList = withSwapi(
  withData(withChildFunction(ItemList, tplStarshop)),
  mapStarshipMethodsToProps
);


export {
  PersonList,
  PlanetList,
  StarshipList
}
