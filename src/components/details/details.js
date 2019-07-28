import React, {Component} from 'react';

import './details.css';



const Record = ({item, field, label}) => {

  return (
    <tr className="table__row">
      <td className="table__cell">{label}</td>
      <td className="table__cell">{item[field]}</td>
    </tr>
  );
};

export {
  Record
};


export default class Details extends Component {

  state = {
    item: null
  };

  componentDidMount() {
    this.updPerson();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.item !== prevProps.item) {
      this.updPerson()
    }
  }

  updPerson() {
    const {item} = this.props;
    if (item) {
      this.setState({
        item
      })
    }
  };

  render() {
    const {item} = this.state;

    if (!item) {
      return (
        <div className='details content__item-r'>
          <div className="details__inner">
            <div className="details__select">Выберите Персонажа</div>
          </div>
        </div>
      );
    }

    const {name, img} = this.props.item;

    return (
      <div className='details content__item-r'>
        <div className="details__inner">
          <h3 className="details__title title-sub">
            {name}
          </h3>

          <div className="details__visual">
            <img src={img} alt="" className="details__img"/>
          </div>

          <table className="table">
            <tbody>
            {
              // Этот кусок кода не нужен в моем случае, потому как мы имеем все необходимые данные, но в видео на этом жтапе мы добавляем сюда item - урок 78
              React.Children.map(this.props.children, (child, idx) => {
                return React.cloneElement(child);
              })
            }

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


/*
class Item extends Component {

    render(){
        const {id, name, gender, birthYear, eyeColor, img} = this.props.item;
        console.log(this.props.children);

        return(
            <React.Fragment>
                <h3 className="details__title title-sub">
                    {name}
                </h3>

                <div className="details__visual">
                    <img  src={img} alt="" className="details__img"/>
                </div>

                <table className="table">
                    <tbody>

                    </tbody>
                </table>
            </React.Fragment>
        )
    }
};*/
