import React from 'react';

import './error-content.css';
import icon from './death-star.png';

const ErrorContent = () => {

  return (
    <div className='error'>
      <div className="error__inner">
        <img src={icon} alt="error icon"/>
        <div className="error__title">
          Ба-Баххххх!!
        </div>
        <div className="error__message">
          Произошла ошибка при загрузке элемента!<br/>
          Не волнуйтесь, отряд дроидов уже направлен на решение этой проблемы!
        </div>
      </div>
    </div>
  )
};

export default ErrorContent;