import React from 'react';

import './row.css';

const Row = ({left, right}) => {
    return(
        <div className="content">
            <div className="content__inner">
                { left }
                { right }
            </div>
        </div>
    )
};

export default Row;