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



export default PersonDetails;

