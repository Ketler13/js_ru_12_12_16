import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Button extends Component {
    state = {
        isOpen: false
    }



    render() {
        const { comments } = this.props
        return (
            <div>
                <button onClick = {this.toggleOpen}>{this.toggler()}</button>
                {this.getComments()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    toggler = () => {
        if (this.state.isOpen) return "Hide comments"
        return "Show comments"
    }

    getComments() {
        if (!this.state.isOpen) return null
        return (
            <CommentList comments = {this.props} />  
        )
    }
}