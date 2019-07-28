import React from 'react';

import Details, {Record} from "../details";



const PlanetDetails = (item) => {

  return (
    <Details item={item}>
      <Record field="model" label="Модель" item={item}/>
      <Record field="length" label="Длина" item={item}/>
      <Record field="costInCredits" label="Цена" item={item}/>
    </Details>
  )
};



export default PlanetDetails;
