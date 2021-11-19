import React from 'react';

export default class Form extends React.Component{

    componentDidUpdate(){
        this.props.inputElement.current.focus();
    }

    render(){
        return(
            <form onSubmit={this.props.addItem} className="form">
                <input 
                    type="text"
                    ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handleInput}
                    placeholder="Task" 
                />
                <button type="submit">Add Task</button>
            </form>
        )
    }
}