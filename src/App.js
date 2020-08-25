import React from 'react';
import Person from './Person/Person';

function App() {
  return (
    <div>
      <h1>I am React App</h1>
      <Person />
      <Person name="Priyanshi" age="20"/>
    </div>
  );
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi There'))
}

export default App;
