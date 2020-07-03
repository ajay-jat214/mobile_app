import React from 'react';
import Magnifier from 'react-magnifier';


export default class Magnify extends React.Component{
  render(){

    	return(
          <Magnifier src={this.props.image} width={250} height={500} />
  		);
  }
}