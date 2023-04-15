import React from 'react';

function App() {

  const onSubmit = () =>{
    alert('submitted');
  }
  return (
    <div className="App">
      <button onClick={onSubmit}>submit</button>
    </div>
  );
}

export default App;
