import React, { Component} from 'react';

import './person-details.css';

export default class PersonDetails extends Component{

    render() {
        return(
            <div className='person-details content__item-r'>
                <div className="person-details__inner">
                    <h3 className="person-details__title title-sub">
                        Звезда смерти
                    </h3>
                    <div className="person-details__visual">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200" alt="" className="person-details__img"/>
                    </div>

                    <table className="table">
                        <tr className="table__row">
                            <td className="table__cell">Население</td>
                            <td className="table__cell">200000</td>
                        </tr>
                        <tr className="table__row">
                            <td className="table__cell">Население</td>
                            <td className="table__cell">200000</td>
                        </tr>
                        <tr className="table__row">
                            <td className="table__cell">Население</td>
                            <td className="table__cell">200000</td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }
}