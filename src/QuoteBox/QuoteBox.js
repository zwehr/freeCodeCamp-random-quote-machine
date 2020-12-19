import React from 'react';

const quoteBox = (props) => {
  return (
    <div id="quote-box">
      <p id="text">{props.quote}</p>
      <p id="author">{props.author}</p>
      <button id="new-quote" onClick={props.click}>New Quote</button>
    </div>
  )
}

export default quoteBox;