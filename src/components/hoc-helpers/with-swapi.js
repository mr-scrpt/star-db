import React from 'react';
import { SwConsumer } from '../api-sw';



const withSwapi = (mapMethodsToProps) => (Wrapped) =>{
  return  (props) => {
    return (
      <SwConsumer>
        {
          (api) => {
            const serviceProps = mapMethodsToProps(api);

            return(
             <Wrapped {...props} {...serviceProps}/>
            )
          }
        }
      </SwConsumer>
    )
  }
};

export default withSwapi;
