import React, { Component } from 'react';

import './page-people.css';
import ItemList from "../item-list";
import Details from "../details";
import ErrorContent from "../error-content";
import Api from '../../services/swapi-sevices';
import Row from '../row';


export default class PagePeople extends Component{
    state = {
        activePerson: null,
        appError: false
    };

    api = new Api();

    componentDidCatch(error, errorInfo) {
        this.setState({
            appError: true
        })
    }

    getPerson = (person)=> {
        this.setState({
            activePerson: person
        });
    };


    render() {
        const { activePerson, appError } = this.state;

        if (appError){
            return <ErrorContent/>
        }
        const itemList = (
            <ItemList
                onItemSelected={this.getPerson}
                getData={this.api.getAllPeople}
                renderItem={(item)=> (<div> {item.name} - {item.gender} </div>)}/>
        );
        const personDetails = (
            <Details activePerson={ activePerson } />
        );
        return(
            <Row left={itemList} right={personDetails} />
        )
    }
}