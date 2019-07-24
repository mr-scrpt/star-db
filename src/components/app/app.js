import React, { Component } from 'react';

//import './app.css';

import Header from '../header';
import PlanetRandom from '../planet-random';

import ErrorContent from "../error-content";
import PagePeople from "../page-people";


export default class App extends Component{
    state = {
        activePerson: null,
        appError: false
    };


    componentDidCatch(error, errorInfo) {
        this.setState({appError: true})
    }

    render() {
        const { appError } = this.state;

        if (appError){
            return <ErrorContent/>
        }

        return(
            <div>
                <Header/>
                <PlanetRandom />
                <PagePeople/>
            </div>
            )
    }
}