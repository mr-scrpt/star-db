import React from 'react';

import './item-list.css';

const ItemList = (props) => {

  const {data, onItemSelected, children: renderLabel} = props;


  const items = data.map((item) => {
    const label = renderLabel(item);
    return (
      <li className="item-list__item" key={item.id} onClick={() => onItemSelected(item)}>
        <span className="item-list__name">{label}</span>
      </li>
    )
  });


  return (
    <div className='item-list content__item-l'>
      <ul className="item-list__inner list">
        {items}
      </ul>
    </div>
  )

};
export default ItemList;