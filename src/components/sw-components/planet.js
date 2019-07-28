import React from 'react';

import Details, {Record} from "../details";


const PersonDetails = ({item}) => {

  return (
    <Details item={item}>
      <Record field="gender" label="Gender" item={item}/>
      <Record field="eyeColor" label="Цвет Глаз" item={item}/>
    </Details>
  );
};

const PlanetDetails = (item) => {

  return (
    <Details item={item}>
      <Record field="model" label="Модель" item={item}/>
      <Record field="length" label="Длина" item={item}/>
      <Record field="costInCredits" label="Цена" item={item}/>
    </Details>
  )
};

const StarshipDetails = (item) => {

  return (
    <Details item={item}>
      <Record field="model" label="Модель" item={item}/>
      <Record field="length" label="Длина" item={item}/>
      <Record field="costInCredits" label="Цена" item={item}/>
    </Details>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
