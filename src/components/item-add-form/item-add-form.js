import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {
    
    state = {
        label: ''
    }
    
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }
    
    onSubmit = (event) => {
        event.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
    }
    
    render() {
        const { onItemAdded } = this.props 
        return (
            <form className="item-add-form d-flex "
            onSubmit={this.onSubmit}>
                <input type='text' className="form-control"
                    placeholder="What needs to be done"
                    onChange={this.onLabelChange}
                    value ={this.state.label} />
                <button className="btn btn-outline-secondary">
                    Add Item
                </button>
            </form>
        )
    }
}