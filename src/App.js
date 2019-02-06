import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
   
  state = {
    friends,
	score: 0,
	highestscore: 0,
	visited: [],
	styling: "App-link"
  };
	  // Logic:
  	  // if this image is already clicked
	  //  	reset the score to 0 and check if current score is higher then highestscore. set high score accordingly.
	  //  	shake the page and reload
	  // if the image is not clicked, push the index of the image into visited array.
	  // 	add 1 to currentScore
	  // 	shuffle the image array
  DoTheAction = id => {	  
   
   // image not yet visited
   if (this.state.visited.indexOf(id)> -1)
   {
	    // but may be start of new game
	   if (this.state.friends.length === this.state.score)
	   {
		   alert ("Hurray!! Congratulation Winner!! ");
			this.setState({
						friends,
						visited:[],												
						highestscore: this.state.score,
						score: 0,
				});
	   }
	   else
	   {
	   // image already clicked and new high score
	   if (this.state.score > this.state.highestscore)
	   {
		   this.state.highestscore = this.state.score ;
		   this.setState({
						friends,
						visited:[],						
						highestscore: this.state.score,
						score: 0,
						styling: "shakepage",
				});
	   }	   
	   else
	   {	   
					this.setState({
						friends,
						visited:[],						
						highestscore: this.state.score,
						score: 0,
						styling: "shakepage",
				});
	   }
   }
   }
   else
   {
	   // image not yet visited
	   if (this.state.friends.length === this.state.score)
	   {
		   alert ("Hurray!! Congratulation Winner!! ");
			this.setState({
						friends,
						visited:[],												
						highestscore: this.state.score,
						score: 0,
				});
	   }
	   else
	   {
		   // game going on
				this.setState({
						friends,
						visited: this.state.visited.concat(id),
						score: this.state.score + 1,
				});
	   }
   }
   console.log (this.state.visited);
   console.log (this.state.score);
  };
  
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
	  <Navbar score={this.state.score} highestscore={this.state.highestscore} />	  
	  <span className="jumbo">
	  <h2 className="text-center text-danger"><p></p>Click on an image to earn points, but don't click on any more than once!<p></p></h2>
	  </span>
	  <Wrapper className={this.state.styling}>
        {this.state.friends.map(friend => (
          <FriendCard
            DoTheAction={this.DoTheAction}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}           
          />
        ))}
      </Wrapper>
	  </div>
    );
  }
}

export default App;
