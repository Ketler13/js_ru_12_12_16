import React, { Component, PropTypes } from 'react'
import {addComment, loadCommentsByArticleId} from '../AC'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import {connect} from 'react-redux'
import Loader from './Loader'
import { mapToArray } from '../helpers'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        const articleId = nextProps.article.id
        const articleComments = nextProps.article.comments
        if (!this.props.isOpen && nextProps.isOpen) nextProps.loadCommentsByArticleId(articleId, articleComments)
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
        const { comments, article, loading, isOpen, addComment, commentsInStore } = this.props
        if (!isOpen) return null
        const form = <NewCommentForm addComment={(comment) => addComment(article.id, comment)} />
        const loader = loading && <Loader />
        if (!comments.length) return <div><p>No comments yet</p>{form}</div>

        const commentItems = !commentsInStore ? null : comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
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
        commentsInStore: storeState.comments.entities.size
    }
}, { addComment, loadCommentsByArticleId })(toggleOpen(CommentList))
