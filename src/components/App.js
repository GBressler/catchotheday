// let's go!
import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";


class App extends React.Component {
  state= {
   fishes: {},
   order: {}
  };
  componentDidMount() {
    const { params } = this.props.match;
    //first reinstate localstorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  componentDidUpdate(){
   console.log(this.state.order);
   localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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
  };

  addToOrder = key => {
    //1.Take copy of state
    const order = {...this.state.order}
    //2. Update order or number of fishes
    order[key] = order[key] + 1 || 1;
    //3. Set State
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Catch of the Day" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
          </ul>
        </div>
       
        <Order fishes = {this.state.fishes} order = {this .state.order} />
        <Inventory addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}


export default App;