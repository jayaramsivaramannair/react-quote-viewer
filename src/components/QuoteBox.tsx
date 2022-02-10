import React from 'react';
import {randomQuotes} from '../utils/quotes'
import {FaTwitter} from 'react-icons/fa'
import {FaTumblr} from 'react-icons/fa'

interface quoteProps {
  setRandomColor: React.Dispatch<React.SetStateAction<string>>
  setRandomNumber: React.Dispatch<React.SetStateAction<number>>
  colorGenerator() : string
  randomNumberGeneration(length: number) : number
  randomColor: string
  randomNumber: number
}


const QuoteBox: React.FC<quoteProps> = ({setRandomColor, 
  colorGenerator,
  setRandomNumber, 
  randomColor, 
  randomNumberGeneration, 
  randomNumber}) => {
  const clickHandlerFunction = () => {
    setRandomColor(colorGenerator())
    setRandomNumber(randomNumberGeneration(randomQuotes.length))
  }
  

  return (
    <div id="quote-box">
      <q id="text" style = {{color: `${randomColor}`}}>{randomQuotes[randomNumber].quote}</q>
      <p id="author" style = {{color: `${randomColor}`}}>{`-${randomQuotes[randomNumber].author}`}</p>
      <div className="icons">
        <div className="twitter" style={{backgroundColor: `${randomColor}`}}>
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer"><FaTwitter size={'3em'} color={'black'}/></a>
        </div>
        <div className="tumblr" style={{backgroundColor: `${randomColor}`}}>
          <a id="tumblr-icon" href="https://twitter.com/intent/tweet"><FaTumblr size={'3em'} color={'black'}/></a>
        </div>
      </div>
        <button id = "new-quote" onClick={clickHandlerFunction} style={{backgroundColor: `${randomColor}`}}>Next Quote</button>
      
    </div>
  )
}


export default QuoteBox;