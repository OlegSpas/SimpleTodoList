import React from 'react';
import Form from './form'

export default class Content extends React.Component{
    render(){
        return(
            <div className="Content">
                <Form
                              addItem={this.props.addItem}
                              inputElement={this.props.inputElement}
                              handleInput={this.props.handleInput}
                              currentItem={this.props.currentItem}
                              />
            </div>
        )
    }
}