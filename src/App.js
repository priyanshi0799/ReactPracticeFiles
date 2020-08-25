import React from 'react';

function App() {
  // return (
  //   <div>
  //     <h1>I am React App</h1>
  //   </div>
  // );
  return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi There'))
}

export default App;
