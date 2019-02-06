import React from "react";
import "./style.css";
import Randomizer from "react-randomizer";

function Wrapper(props) {
  // return <div className="wrapper">{props.children}</div>;
   return <div className="wrapper">{Randomizer.randomizeArray(props.children)} </div>;
}

export default Wrapper;
