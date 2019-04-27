// let's go!
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from "../sample-fishes";
import Fish from "./Fish"


class App extends React.Component {
  state= {
   fishes: {},
   order: {}
  };

  addFish = fish => {
    console.log("Adding fishes");
     //1. Take a copy of existing state
     const fishes = {...this.state.fishes};
     //2.Add new fish to variable
     fishes[`fish${Date.now()}`] = fish;
     //3. Set the new fishes to state
     this.setState({
       fishes: fishes
     })
  };

  loadSampleFishes = () => {
    //alert('Loading');
    this.setState({fishes: sampleFishes})

  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Catch of the Day" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
       
        <Order />
        <Inventory addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}


export default App;