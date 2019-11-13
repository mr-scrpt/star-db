import React from "react";

const withChildFunction = (child) => (Component) => {
  return (props) => {
    return <Component {...props}>{child}</Component>
  }
};

export default withChildFunction;