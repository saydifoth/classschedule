import React, { Component } from 'react';
import Icon from './icon';

class Action extends Component {

handleAction = function() {
    this.props.onclick()

    //document.getElementById('action').classList.add('')
}.bind(this);

    render() {
        return (
            <a 
            id='action'
            onClick={() => this.props.onClick()} 
            className={`${this.props.className} action`}>
                
            </a>
        )
    }
}

export default Action;