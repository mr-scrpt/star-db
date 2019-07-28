import React, {Component} from 'react';

import './page-people.css';
import ItemList from "../item-list";
import Details from "../details";
import ErrorBoundary from '../error-boundary';
import Api from '../../services/swapi-sevices';
import Row from '../row';


export default class PagePeople extends Component {
  state = {
    activePerson: null
  };

  api = new Api();

  getPerson = (person) => {
    this.setState({
      activePerson: person
    });

  };


  render() {
    const {activePerson} = this.state;


    const itemList = (
      <ItemList onItemSelected={this.getPerson} getData={this.api.getAllPeople}>

        {(item) => (<div> {item.name}: {item.gender} </div>)}

      </ItemList>
    );
    const personDetails = (
      <Details activePerson={activePerson}/>
    );
    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails}/>
      </ErrorBoundary>
    )
  }
}