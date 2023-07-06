// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {

  const [number, setNumber] = React.useState(0);

  const plusNumberClick = () => {
    setNumber(prevState => prevState + 1)
  }

  return (
    <>
      <div className='Number-Container'>
        <p className='Number-P'>{number}</p>
      </div>
      <div className='Buttons-Container'>
        <button
          onClick={() => setNumber(0)}
          className='Button-Reset Button'
        >Reset</button>
        <button
          onClick={plusNumberClick}
          className='Button-Click Button'
        >Click</button>
      </div>
    </>
  );
}

export default App;
