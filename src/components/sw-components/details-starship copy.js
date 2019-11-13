import React from "react";
import { useEffect, useState } from "react";

import Details, { Record } from "../details";
import { withSwapi } from "../hoc-helpers";
import ItemList from "../item-list";

const StarshipDetails = ({
  match: {
    params: { id = 1 }
  },
  getData
}) => {
  const [item, setItem] = useState(null);

  const getItemFromApi = async id => {
    await setItem(getData(id));
  };

  async function getDataApi() {
    const response = await getData(id);
    const data = await response;
    setItem(data);
  }

  useEffect(() => {
    getDataApi();
  }, []);

  {
    /* <div>{item.map(field=> (<p>{field}</p>))}</div>*/
  }
  if (item) {
    console.log(item);
    return (
      <Details item={item} img={item.img}>
        <Record field="name" label="Имя" item={item} />
        <Record field="model" label="Модель" item={item} />
        <Record field="costInCredits" label="Цена" item={item} />
      </Details>
    );
  } else {
    return null;
  }

  {
    /*<Details item={item}>
      <Record field="model" label="Модель" item={item}/>
      <Record field="length" label="Длина" item={item}/>
      <Record field="costInCredits" label="Цена" item={item}/>
    </Details>*/
  }
};

const getStarship = api => {
  return {
    getData: api.getStarship
  };
};

export default withSwapi(getStarship)(StarshipDetails);
