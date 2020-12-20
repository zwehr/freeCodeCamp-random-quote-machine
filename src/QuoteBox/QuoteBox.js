import React from 'react';

const quoteBox = (props) => {
  const twitterHref = "https://www.twitter.com/intent/tweet/?text=" + "\"" + props.quote + "\" -" + props.author;
  
  return (
    <div id="quote-box">
      <p id="text">{props.quote}</p>
      <p id="author">{props.author}</p>
      <button id="new-quote" onClick={props.click}>New Quote</button>
      <a href={twitterHref} id="tweet-quote">Tweet this</a>
    </div>
  )
}

export default quoteBox;