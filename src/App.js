// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {

  const [number, setNumber] = React.useState(0);

  const plusNumberClick = () => {
    setNumber(prevState => prevState + 1)
  }
  // const restartNumberClick = () => {
  //   setNumber(0)
  // }

  return (
    <>
      <div>
        <p>{number}</p>
      </div>
      <div>
        <button onClick={() => setNumber(0)}>Reset</button>
        <button onClick={plusNumberClick}>Click</button>
      </div>
    </>
  );
}

// function useClicks(initialItem){
//   const [item, setItem] = React.useState(initialItem);
//   // let currentValue = item;
//   // let currentValue = item;
//   // const newClick = () => {
//   //   setItem(currentValue++);
//   //   console.log('click')
//   // }

//   return [item, setItem];
// }

export default App;
