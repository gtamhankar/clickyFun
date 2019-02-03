import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.shuffleArray(props.friends)} className="remove" />
	   </div>
    </div>
  );
}

export default FriendCard;
