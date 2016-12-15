import React from 'react'
import Comment from './Comment'

export default function CommentList(props) {
    const { comments } = props.comments
    const commentElements = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
    return (
        <div>
            <ul>
                <h3>Comments</h3>
                {commentElements}
            </ul>
        </div>
    )
}