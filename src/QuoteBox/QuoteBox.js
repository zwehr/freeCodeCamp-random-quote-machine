import React from 'react';

const quoteBox = (props) => {
    return (
        <div id="quote-box">
            <p id="text">This is the quote text.</p>
            <p id="author">-Author</p>
            <button id="new-quote">New Quote</button>
        </div>
    )
}

export default quoteBox;