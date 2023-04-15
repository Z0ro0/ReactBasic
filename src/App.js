import React from 'react';

function App() {

  const onSubmit = () =>{
    alert('submitted');
  }

  const onKeyUp = (event) =>{
    if(event.keyCode===13){//enter를 누르면 함수 실행
        onSubmit();
    }
  }
  return (
    <div className="App">
      <input onKeyUp={onKeyUp}></input>
      <button onClick={onSubmit}>submit</button>
    </div>
  );
}

export default App;
