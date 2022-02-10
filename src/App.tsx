import React, {useState} from 'react';
import QuoteBox from './components/QuoteBox';

import './App.css';

function App() {

  const [randomColor, setRandomColor] = useState('#ffffff')
  const [randomNumber, setRandomNumber] = useState(0)

  const colorGenerator = () => {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor
  }

  const randomNumberGeneration = (length: number) => {
    let randomNumber = Math.floor(Math.random() * length)
    return randomNumber
  }

  
  return (
    <div className="App" style={{backgroundColor: `${randomColor}`}}>
      <h1>React Quote Viewer</h1>
      <div className='quote-container'>
        <QuoteBox 
          setRandomColor={setRandomColor} 
          setRandomNumber={setRandomNumber}
          colorGenerator={colorGenerator}
          randomNumberGeneration = {randomNumberGeneration} 
          randomColor={randomColor}
          randomNumber={randomNumber}
        />
      </div>
    </div>
  );
}

export default App;
