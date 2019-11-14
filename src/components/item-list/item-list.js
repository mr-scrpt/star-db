import React from "react";
import PropTypes from "prop-types";

import "./item-list.css";

const ItemList = props => {
  const { data, onItemSelected, onLoadList, children: renderLabel } = props;

  if (data && onLoadList) {
    onLoadList();
  }

  const items = data.map(item => {
    const label = renderLabel(item);
    return (
      <li
        className="item-list__item"
        key={item.id}
        onClick={() => onItemSelected(item)}
      >
        <span className="item-list__name">{label}</span>
      </li>
    );
  });

  return (
    <div className="item-list content__item-l">
      <ul className="item-list__inner list">{items}</ul>
    </div>
  );
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};
export default ItemList;
