import React, { Component, PropTypes } from 'react'
import {addComment, loadCommentsByArticleId } from '../AC'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'
import {connect} from 'react-redux'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps(nextProps) {
        if ( !this.props.isOpen && nextProps.isOpen) nextProps.loadCommentsByArticleId(nextProps.article.id)
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
        const { comments, article, isOpen, addComment, loading, loaded } = this.props
        if (!isOpen) return null
        const form = <NewCommentForm addComment={(comment) => addComment(article.id, comment)} />
        const isCommentLoading = loading.includes(article.id)
        const isCommentLoaded = loaded.includes(article.id)
        const loader = isCommentLoading && <Loader />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        const commentItems = isCommentLoaded ? comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>) : null
        return (
            <div>
                { loader }
                <ul>{commentItems}</ul>
                {form}
            </div>
        )
    }
}

export default connect((storeState, props) => {
    return {
        comments: props.article.comments.map(id => storeState.comments.entities.get(id)),
        loading: storeState.comments.loading,
        loaded:  storeState.comments.loaded
    }
}, { addComment, loadCommentsByArticleId })(toggleOpen(CommentList))
