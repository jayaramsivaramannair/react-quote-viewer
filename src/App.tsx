import React, {useState} from 'react';
import QuoteBox from './components/QuoteBox';

import './App.css';

function App() {

  const [randomColor, setRandomColor] = useState('#ffffff')

  const colorGenerator = () => {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor
  }

  
  return (
    <div className="App" style={{backgroundColor: `${randomColor}`}}>
      <h1>Hello React Quote Viewer Project</h1>
      <div className='quote-container'>
        <QuoteBox setRandomColor={setRandomColor} colorGenerator={colorGenerator} randomColor={randomColor}/>
      </div>
    </div>
  );
}

export default App;
