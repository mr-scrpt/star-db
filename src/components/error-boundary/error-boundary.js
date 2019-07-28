import React, {Component} from 'react'
import ErrorContent from "../error-content";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorContent/>
    }
    return this.props.children;
  }
};