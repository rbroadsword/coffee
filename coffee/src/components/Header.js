import React from "react"; 
import "../App.css"; 

function Header(props) {
  const headerstyles = {
    backgroundColor: 'grey',
    fontFamily: 'sans-serif',
    paddingTop: '2.5rem', 
    fontSize: '5rem', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
    return (
      <div className="text-center">
        <h1>co*ff*ee</h1>
      </div>
      
    )
  }


export default Header; 