import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        const { comment } = this.props
        return (
            <div>
                <p>{comment.text}</p>
                <p>Posted by {comment.user}</p>
            </div>
        )
    }
}