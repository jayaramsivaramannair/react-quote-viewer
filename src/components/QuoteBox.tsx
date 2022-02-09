import React from 'react';

interface quoteProps {
  setRandomColor: React.Dispatch<React.SetStateAction<string>>
  colorGenerator() : string
  randomColor: string
}


const QuoteBox: React.FC<quoteProps> = ({setRandomColor, colorGenerator, randomColor}) => {
  const clickHandlerFunction = () => {
    setRandomColor(colorGenerator())
  }

  return (
    <div>
      <p>This is where I get quoted!</p>
      <button onClick={clickHandlerFunction} style={{backgroundColor: `${randomColor}`}}>Change colors!</button>
    </div>
  )
}


export default QuoteBox;