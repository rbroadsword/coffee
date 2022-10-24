import React from "react"; 
import PropTypes from "prop-types"; 

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name} - {props.price}</h3>
        <h3>Roast: {props.roast}</h3>
        <h3>Quantity: {props.quantity}</h3>
        <p>{props.description}</p>
      </div>
      <div>
        <button onClick={() => props.whenSellCoffeeClicked(props.id)}>Sell
        </button>
      </div>
    </React.Fragment>
  ); 
}

Coffee.propTypes = {
  name: PropTypes.string, 
  quantity: PropTypes.number, 
  roast: PropTypes.string, 
  price: PropTypes.number,
  description: PropTypes.string, 
  id: PropTypes.string, 
  whenCoffeeClicked: PropTypes.func, 
  whenSellCoffeeClicked: PropTypes.func
}; 

export default Coffee; 