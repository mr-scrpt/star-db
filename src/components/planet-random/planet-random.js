import React, { Component } from 'react';

import './planet-random.css';

export default class PlanetRandom extends Component{


    render(){
        return(
            <div className="planet-random">
                <div className="planet-random__inner">
                    <div className="planet-random__visual">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200" alt="" className="planet-random__img"/>
                    </div>
                    <div className="planet-random__info-block">
                        <h1 className="title planet-random__title">
                            Планета
                        </h1>
                        <div className="planet-random__description">
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
                </div>
            </div>
        )
    }
}