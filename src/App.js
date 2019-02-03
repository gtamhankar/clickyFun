import React, { Component } from "react";
import Navbar from "./components/Navbar";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
  
/*
  shuffleFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
*/  

  shuffleArray = friends => {
  const array = [];
  let i = this.state.friends.length - 1;
  /*
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = this.state.friends[i];
    this.state.friends[i] = this.state.friends[j];
    this.state.friends[j] = temp;
  }
  */
  //this.setState({ friends });
  return array;
};

  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
	  <Navbar />
	  
	  <span className="jumbo">
	  <h1 className="text-center text-danger"><p></p>Click on an image to earn points, but don't click on any more than once!<p></p></h1>
	  </span>
	  <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
	  </div>
    );
  }
}

export default App;
