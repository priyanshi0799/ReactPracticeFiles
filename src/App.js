import React, {useState} from 'react';
import Person from './Person/Person';

const App = () => {

  const [personState, setPersonState] = useState({
    persons: [
      {name: "Max", age: 20},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26},
    ],
    otherState: 'Some value'
  })

  console.log(personState); //useState basically replaces the original state with the updated one

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        {name: "Maximillian", age: 20},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27},
      ]
    })
  }

    return (
      <div>
        <h1>I am React App</h1>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person />
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      </div>
    );
  
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi There'))
}

export default App;
