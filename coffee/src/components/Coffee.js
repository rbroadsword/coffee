import React from "react"; 
import PropTypes from "prop-types"; 

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.quantity}</h3>
        <p>{props.description}</p>
      </div>
    </React.Fragment>
  ); 
}

Coffee.propTypes = {
  name: PropTypes.string, 
  quantity: PropTypes.number, 
  description: PropTypes, 
  id: PropTypes.string, 
  whenCoffeeClicked: PropTypes.func
}; 

export default Coffee; 