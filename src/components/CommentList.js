import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    componentWillMount() {
        //console.log('---', 1)
    }

    componentDidMount() {
        //console.log('---', 2)
    }

    componentWillUnmount() {
        //console.log('---', 3)
    }

    componentWillReceiveProps(nextProps) {
        //console.log('---', 'updating to toggle open', this.props.isOpen !== nextProps.isOpen)
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? 'hide' : 'show'} comments
        </a>
    }

    getBody() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        if (!comments.length) {
          return (
            <div>
              <p>No comments yet</p>
              <CommentForm />
            </div>
           )
        }
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
          <div>
            <ul>{commentItems}</ul>
            <CommentForm />
          </div>
        )
    }
}

export default toggleOpen(CommentList)
