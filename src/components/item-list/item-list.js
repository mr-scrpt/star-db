import React, {Component} from 'react';

import './item-list.css';


export default class ItemList extends Component{

    render() {
        return(
            <div className='item-list content__item-l'>
                <ul className="item-list__inner list">
                   <li className="item-list__item">
                       <span className="item-list__name">Планета 1</span>
                   </li>
                    <li className="item-list__item">
                        <span className="item-list__name">Планета 2</span>
                    </li>
                    <li className="item-list__item">
                        <span className="item-list__name">Планета 3</span>
                    </li>
                </ul>
            </div>
        )
    }

}