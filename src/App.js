import React, { Component } from 'react';
import './App.css';

import Header from './components/header';

import Todoitem from './components/todoitem';

class App extends Component {
  constructor(){
    super();
    this.items=[
      {title:'Di an',isComplete:true},
      {title:'Di choi'},
      {title:'Nghe nhac'},
      {title:'Hoc React'}
    ];
  }
  render() {
    return (
      <div className="app">
        <Header></Header>
        {this.items.map((item,index) => <Todoitem key={index} item={item}></Todoitem>)  }
      </div>
    );
  }
}

export default App;
