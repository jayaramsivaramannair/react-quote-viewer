import React from 'react';

interface quoteProps {
  setRandomColor: React.Dispatch<React.SetStateAction<string>>
  colorGenerator() : string
}


const QuoteBox: React.FC<quoteProps> = ({setRandomColor, colorGenerator}) => {
  const clickHandlerFunction = () => {
    setRandomColor(colorGenerator())
  }

  return (
    <div>
      <p>This is where I get quoted!</p>
      <button onClick={clickHandlerFunction}>Change colors!</button>
    </div>
  )
}


export default QuoteBox;