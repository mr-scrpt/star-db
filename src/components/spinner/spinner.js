import React from 'react';

import './spinner.css';

const Loader = () => {
  return (
    <div className="lds-css ng-scope spinner">
      <div className="lds-double-ring spinner__rings">
        <div></div>
        <div></div>
      </div>
    </div>
  )
};

export default Loader;