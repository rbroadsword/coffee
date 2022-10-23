import React from "react"; 
import PropTypes from "prop-types"; 

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - Quantity:{coffee.quantity}</h3>
      <p>{coffee.description}</p>
      <button onClick={ props.onClickEdit }>Update Coffee</button>
      <button onClick={() => props.onClickingDelete(coffee.id) }>Close Coffee</button>
    </React.Fragment>
  ); 
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object, 
  onClickingDelete: PropTypes.func, 
  onClickingEdit: PropTypes.func
}; 

export default CoffeeDetail; 