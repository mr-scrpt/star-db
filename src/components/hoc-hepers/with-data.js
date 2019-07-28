import React, {Component} from 'react';
import Spinner from "../spinner";



import {withSwapi} from './index';

const withData = (View) => {

  return class extends Component {
    state = {
      data: null
    };

    async componentDidMount() {

      try {

        const data = await this.props.getData();
        this.setState({
          data
        })
      } catch (e) {
        console.log('Ошибка получения данных!');
      }

    }

    render() {
      const {data} = this.state;


      if (!data) {
        return <Spinner/>
      }
      return <View {...this.props} data={data}/>
    }
  }
};

export default withData;