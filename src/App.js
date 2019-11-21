import React from 'react';
import './App.css'
import DogInfo from  './DogInfo'

const dogUrl = "http://localhost:3000/pups"


class App extends React.Component {
  state = {
    dogs: [],
    selectedDog: null,
  };

  fetchDogs(){
    fetch(dogUrl)
      .then(res => res.json())
      .then(res => this.setState({dogs: res}))
  }

  componentDidMount (){
    this.fetchDogs()
  }
  
  handleDogClick = (dog) => {
    this.setState({selectedDog: dog})
  }

  render(){
    // console.log(this.state.dogs)
    // const dogs = this.state.dogs
    // console.log("dogs: ", dogs)
    const dogNameSpans = this.state.dogs.map(dog =><span key={dog.id} onClick={(e) => this.handleDogClick(dog)}>{dog.name}</span> )
    // console.log("singleDogName: ", singleDogName)
    // debugger
    return (
    <div className="App">
        <div id="filter-div">
          <button id="good-dog-filter">Filter good dogs: OFF</button>
        </div>
        <div id="dog-bar">
          {dogNameSpans}
        </div>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <div id="dog-info">
            {this.state.selectedDog ? <DogInfo slectedtDoggie={this.state.props}/> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
