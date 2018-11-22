import React, { Component } from 'react';
import './App.css';
import Header from './content/header/header.js';
import HeaderS from './content/header_second/header_second.js';
import Footer from './content/footer/footer.js';
import Items from './content/items/items.js';
class App extends Component {
  constructor(){
    super();
    this.state= {
      amount : 0
    }
  }
  formChild1(params) {
    this.setState({
      amount : params
    })
  }
  render() {
    return (
      <div className="App">
        <div className="wrapper1">
          <Header data={this.state.amount}></Header>
          <HeaderS></HeaderS>
          <Items callback={this.formChild1.bind(this)}></Items>
          <content></content>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
