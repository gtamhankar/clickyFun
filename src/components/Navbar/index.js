import React, { Component } from "react";
import "./style.css";


class Navbar extends Component {
  render() {
    return (
	
      <nav className="navbar bg-primary navtest" role="navigation">
      
        <ul className="nav navbar-nav">
          <li className="navbar-left">Clicky Game</li>         
          <li className="navbar-center">Current Score: {this.props.score} </li>        
          <li className="navbar-right">Highest Score: {this.props.highestscore}</li>          
        </ul>
      
    </nav>
	
    );
  }
}

export default Navbar;