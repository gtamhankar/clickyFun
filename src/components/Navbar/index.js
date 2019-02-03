/* import React from "react";
import "./style.css";
import Title from "../Title";
import Score from "../Score";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navtest">  	
		<Title>Clicky Game</Title>
		<Score></Score>
    </nav>
  );
}

export default Navbar;
*/

import React, { Component } from "react";
import "./style.css";
import Title from "../Title";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navtest">         
		<ul>
		<li className="Center">Clicky Game</li> 			 
        <li className="Right">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;