import React from "react"; 
import Coffee from "./Coffee"; 
import PropTypes from "prop-types"; 

function CoffeeList(props){
  return (
    <React.Fragment>
      <div className="background-color: rgb(251 191 36);">
        {props.coffeeList.map((coffee) =>
        <Coffee 
          whenCoffeeClicked = { props.onCoffeeSelection }
          name={coffee.name}
          roast={coffee.roast}
          quantity={coffee.quantity}
          description={coffee.description}
          id={coffee.id}
          key={coffee.id}/>
        )}
      </div>
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array, 
  onCoffeeSelection: PropTypes.func
}; 

export default CoffeeList;