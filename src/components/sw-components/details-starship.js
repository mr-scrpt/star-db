import React from "react";
import Details, { Record } from "../details";

const StarshipDetails = ({ item, loaded }) => {
  return (
    <Details item={item} loaded={loaded} img={item && item.img}>
      <Record field="name" label="Имя" item={item} />
      <Record field="model" label="Модель" item={item} />
      <Record field="costInCredits" label="Цена" item={item} />
    </Details>
  );
};

export default StarshipDetails;
