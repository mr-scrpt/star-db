import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import PlanetRandom from '../planet-random';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

export default class App extends Component{
    render() {
        return(
            <div>
                <Header/>
                <PlanetRandom />
                <div className="content">
                    <div className="content__inner">
                        <ItemList />
                        <PersonDetails/>
                    </div>
                </div>

            </div>
            )
    }
}