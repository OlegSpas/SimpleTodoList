
import React from 'react';

export default class TodoItem extends React.Component{


    createTask = item => {
        return(
            <li key={item.key}>
                {item.text}
                <button onClick={() => this.props.deleteItem(item.key)}>Delete</button>
            </li>
        )
    }

    render(){
        const todoEntries = this.props.entries
        const listItems = todoEntries.map(this.createTask)
        return <ul className="todoList">{listItems}</ul>
    }
}