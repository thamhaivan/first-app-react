import React, { Component } from 'react';
import './todo.css';

class Todoitem extends Component{
    render(){
        let className = 'todo-item';
        const { item } = this.props;
        if(item.isComplete == true){
            className += ' todo-item-complete';
        }
        return(
            <div className={className}>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default Todoitem;