import React , {Component} from 'react';
import Person from './Person/Person';

class App extends Component{
  
  state = {
    persons: [
      {name: "Max", age: 20},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26},
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked')
    this.setState({
      persons: [
        {name: "Maximillian", age: 20},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27},
      ]
    })
  }

  render(){
    return (
      <div>
        <h1>I am React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person />
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      </div>
    );
  }
  
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi There'))
}

export default App;
