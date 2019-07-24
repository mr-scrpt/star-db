import React, {Component} from 'react';

import './item-list.css';

import Api from '../../services/swapi-sevices';
import Spinner  from '../spinner';
import ErrorContent from "../error-content";



export default class ItemList extends Component{
    state = {
        itemList: null,
        loading: true,
        error: false
    };

    api = new Api();

    async componentDidMount() {
        const { getData } = this.props;
        try {
            const itemList = await getData();
            this.setState({
                itemList,
                loading: false
            })
        }catch (e) {
           console.log('Ошибка получения данных!');
        }

    }

    renderItems = (arr) => {
        return arr.map((person) =>{
            const label = this.props.renderItem(person);
            return (
                <li className="item-list__item" key={person.id} onClick={()=> this.props.onItemSelected(person)}>
                    <span className="item-list__name">{label}</span>
                </li>
            )
        })
    };

    render() {
        const { itemList, loading , error } = this.state;

        const hasData = !(loading || error);

        const items = itemList ? this.renderItems(itemList) : null;
        const errorMessage = error ? <ErrorContent /> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? items : null;

        return(
            <div className='item-list content__item-l'>
                <ul className="item-list__inner list">
                    {errorMessage}
                    {spinner}
                    {content}
                </ul>
            </div>
        )
    }

}