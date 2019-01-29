import React, { Component } from 'react';
import './App.css';

import Header from './components/header';

import Todoitem from './components/todoitem';

class App extends Component {
  items = [
    {title:'Di an',isComplete:true},
    {title:'Di choi',isComplete:true},
    {title:'Nghe nhac'},
    {title:'Hoc React'}
  ];
  render() {
    return (
      <div className="app container">
        <Header></Header>
        <div>
          {this.items.length > 0 && this.items.map((item,index) => <Todoitem key={index} item={item}></Todoitem>) }
          {this.items.length == 0 && 'Nothing'}
        </div>
      </div>
    );  
  }
}

export default App;
