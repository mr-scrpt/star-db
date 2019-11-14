import React from "react";

import Details, { Record } from "../details";

const PlanetDetails = ({ item, loaded }) => (
  <Details item={item} loaded={loaded}>
    <Record field="name" label="Название" item={item} />
    <Record
      field="rotationPeriod"
      label="Оборот вокруг своей оси"
      item={item}
    />
    <Record field="population" label="Население" item={item} />
    <Record field="diameter" label="Диаметр" item={item} />
  </Details>
);

export default PlanetDetails;
