import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "./details.css";

const Record = ({ item, field, label }) => {
  return (
    <tr className="table__row">
      <td className="table__cell">{label}</td>
      <td className="table__cell">{item[field]}</td>
    </tr>
  );
};

export { Record };

class Details extends Component {
  state = {
    item: null,
    loaded: false
  };

  componentDidMount() {
    this.updPerson();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.item !== prevProps.item) {
      this.updPerson();
    }
  }

  updPerson() {
    const { item } = this.props;
    if (item) {
      this.setState({
        item: item
      });
    }
  }

  render() {
    const { item } = this.state;
    const { loaded } = this.props;
    const { path } = this.props.match;

    if (!item && !loaded) {
      return null;
    }
    if (!item && loaded) {
      return (
        <div className="details content__item-r">
          <div className="details__inner">
            <div className="details__select">Выберите пункт слева</div>
          </div>
        </div>
      );
    }
    const { name, img, id } = this.props.item;

    return (
      <div className="details content__item-r">
        <div className="details__inner">
          <h3 className="details__title title-sub">
            <Link to={id}>{name}</Link>
          </h3>

          <div className="details__visual">
            <img src={img} alt="" className="details__img" />
          </div>

          <table className="table">
            <tbody>
              {// Этот кусок кода не нужен в моем случае, потому как мы имеем все необходимые данные, но в видео на этом этапе мы добавляем сюда item - урок 78
              React.Children.map(this.props.children, (child, idx) => {
                return React.cloneElement(child);
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default withRouter(Details);
