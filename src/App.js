// import logo from './logo.svg';
import React from 'react';
import './App.css';

function useClicks(initialItem){
  let [item, setItem] = React.useState(initialItem);

  const newClick = () => {
    setItem(item++);
  }

  return [item, newClick];
}

function App() {

  const [number, setNumber] = useClicks(0);

  return (
    <>
      <div>
        <p>{number}</p>
      </div>
      <div>
        <button onClick={setNumber}>Reset</button>
        <button onClick={setNumber}>Click</button>
      </div>
    </>
  );
}

export default App;
