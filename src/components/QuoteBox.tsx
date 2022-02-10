import React from 'react';
import {randomQuotes} from '../utils/quotes'

interface quoteProps {
  setRandomColor: React.Dispatch<React.SetStateAction<string>>
  colorGenerator() : string
  randomColor: string
}


const QuoteBox: React.FC<quoteProps> = ({setRandomColor, colorGenerator, randomColor}) => {
  const clickHandlerFunction = () => {
    setRandomColor(colorGenerator())
  }

  console.log(randomQuotes[1])

  return (
    <div className="quote-box">
      <q id="text" style = {{color: `${randomColor}`}}>{randomQuotes[1].quote}</q>
      <p id="author" style = {{color: `${randomColor}`}}>{`-${randomQuotes[1].author}`}</p>
      <button id = "new-quote" onClick={clickHandlerFunction} style={{backgroundColor: `${randomColor}`}}>Next Quote</button>
    </div>
  )
}


export default QuoteBox;