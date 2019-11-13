import React from 'react';
import PropTypes from 'prop-types';

import './row.css';

const Row = ({left, right}) => {

  return (
    <div className="content">
      <div className="content__inner">
        {left}
        {right}
      </div>
    </div>
  )
};

Row.propTypes ={
  left: PropTypes.node,
  right: PropTypes.node
};

export default Row;