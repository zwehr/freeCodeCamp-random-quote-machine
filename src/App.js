import React, { Component } from 'react';
import './App.css';
import QuoteBox from './QuoteBox/QuoteBox';
import quotesData from './quotesData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: "",
      author: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.updateQuoteIndex();
  }

  handleClick() {
    console.log("Click handled...");
    this.updateQuoteIndex();
  }

  updateQuoteIndex() {
    const newIndex = Math.floor(Math.random() * quotesData.length)
    this.setState({
      quote: quotesData[newIndex].quote,
      author: quotesData[newIndex].author
    }, () => console.log("The new quote is: " + this.state.quote + " And the new author is: " + this.state.author))
  }
  
  render() {
    return (
      <div className="App">
        <QuoteBox id="quote-box" quote={this.state.quote} author={this.state.author} click={this.handleClick}/>
      </div>
    );
  };
}

export default App;
