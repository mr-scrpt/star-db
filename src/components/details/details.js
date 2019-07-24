import React, { Component} from 'react';

import './details.css';



export default class Details extends Component{

    state = {
        activePerson: null
    };
    componentDidMount() {
        this.updPerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.activePerson !== prevProps.activePerson){
            this.updPerson()
        }
    }

    updPerson (){
        const { activePerson } = this.props;
        if(activePerson){
            this.setState({
                activePerson
            })
        }
    };
    render() {
        const { activePerson } = this.state;
        const data = activePerson ? <Person person={activePerson}/> : <div className="details__select">Выберите Персонажа</div>;

        return(
            <div className='details content__item-r'>
                <div className="details__inner">
                    {data}
                </div>
            </div>
        )
    }
}

const Person = ({person}) =>{
    const {id, name, gender, birthYear, eyeColor} = person;

    return(
       <React.Fragment>
            <h3 className="details__title title-sub">

            </h3>
            <div className="details__visual">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="" className="details__img"/>
            </div>

            <table className="table">
                <tbody>
                <tr className="table__row">
                    <td className="table__cell">Имя</td>
                    <td className="table__cell">{name}</td>
                </tr>
                <tr className="table__row">
                    <td className="table__cell">Пол</td>
                    <td className="table__cell">{gender}</td>
                </tr>
                <tr className="table__row">
                    <td className="table__cell">Рождение</td>
                    <td className="table__cell">{birthYear}</td>
                </tr>
                <tr className="table__row">
                    <td className="table__cell">Цвет глаз</td>
                    <td className="table__cell">{eyeColor}</td>
                </tr>
                </tbody>
            </table>
    </React.Fragment>
    )
};