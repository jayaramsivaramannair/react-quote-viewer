import React from 'react';
import {randomQuotes} from '../utils/quotes'
import {FaTwitter} from 'react-icons/fa'
import {FaTumblr} from 'react-icons/fa'

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
      <div className="social-container">
        <div className="twitter" style={{backgroundColor: `${randomColor}`}}>
          <a id="tweet-quote" href={`../../public/twitter.svg`}><FaTwitter size={'3em'} color={'black'}/></a>
        </div>
        <div className="tumblr" style={{backgroundColor: `${randomColor}`}}>
          <a id="tumblr-icon" href={`../../public/twitter.svg`}><FaTumblr size={'3em'} color={'black'}/></a>
        </div>
      </div>
    </div>
  )
}


export default QuoteBox;