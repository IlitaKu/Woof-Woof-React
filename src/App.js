import React from 'react';
import './App.css'

const dogUrl = "http://localhost:3000/pups"


class App extends React.Component {
    state = {
      dogs: [],
    };
    fetchDogs(){
      fetch(dogUrl)
        .then(res => res.json())
        .then(res => this.setState({dogs: res}))
    }
    componentDidMount (){
      this.fetchDogs()
    }
    

render(){
  // console.log(this.state.dogs)
  // const dogs = this.state.dogs
  // console.log("dogs: ", dogs)
  const singleDogName = this.state.dogs.map(dog =><span>{dog.name}</span> )
  // console.log("singleDogName: ", singleDogName)
  // debugger
  return (
  <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        {singleDogName}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">

        </div>
      </div>
    </div>
  );
}
}

export default App;
