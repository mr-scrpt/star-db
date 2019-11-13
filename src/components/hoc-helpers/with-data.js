import React, {Component} from 'react';
import Spinner from "../spinner";
import ErrorContent from "../error-content";


const withData = (View) => {

  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidMount() {
      this.updata()


    }

    async updata(){

      this.setState({
        loading: true,
        error: false
      });

      try {
        const data = await this.props.getData();
        this.setState({
          data,
          loading: false
        })
      } catch (e) {
        this.setState({
          error: true,
          loading: false
        })
      }
    }
    render() {
      const {data, loading, error} = this.state;


      if (loading) {
        return <Spinner/>
      }
      if (error) {
        return <ErrorContent/>
      }
      return <View {...this.props} data={data}/>
    }
  }
};

export default withData;