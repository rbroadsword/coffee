import React from "react"; 
import NewCoffeeForm from "./NewCoffeeForm"; 
import CoffeeList from "./CoffeeList"; 
import CoffeeDetail from "./CoffeeDetail"; 
import EditCoffeeForm from "./EditCoffeeForm"; 

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      formVsibleOnPage: false, 
      mainCoffeeList: [], 
      selectedTicket: null, 
      editing: false
    }; 
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id ===id)[0]; 
    this.setState({selectedCoffee: selectedCoffee}); 
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee); 
    this.setState({mainCoffeeList: newMainCoffeeList, 
                  formVisibleOnPage: false});
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false, 
        selectedCoffee: null, 
        editing: false,
      }); 
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage, 
      })); 
    }
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id); 
    this.setState({
      mainCoffeeList: newMainCoffeeList, 
      selectedCoffee: null
    }); 
  }

  handleEditClick = () => {
    this.setState({editing: true}); 
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit); 
    this.setState({
      mainCoffeeList: editedMainCoffeeList, 
      editing: false, 
      selectedCoffee: null
    }); 
  }

  handleSellingCoffee(id) {
    const coffeeSelection = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    const coffeeLeft = this.state.mainCoffeeList.filter(coffee => coffee.id !== coffeeSelection); 
    coffeeSelection.quantity = coffeeSelection.quantity - 1; 
    const newMainCoffeeList = coffeeLeft; 
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      editing: false, 
      selectedCoffee: null
    });
  }

  render(){
    let currentlyVisibleState = null; 
    let buttonText = null; 

    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} onEditCoffee={this.handleEditingCoffeeInList}/>
      buttonText = "Return to Coffee List"
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee} onClickingDelete = {this.handleDeletingCoffee} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Coffee List"; 
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />; 
      buttonText= "Return to Coffee List"; 
    } else {
      currentlyVisibleState = <CoffeeList 
        coffeeList={this.state.mainCoffeeList} 
        onCoffeeSelection={this.handleChangingSelectedCoffee}
        onClickingSellCoffee={this.handleSellingCoffee} />; 
      buttonText = "Add Coffee"; 
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    ); 
  }
}

export default CoffeeControl; 