import React, { Component, PropTypes } from 'react'
import {addComment, loadArticleComments} from '../AC'
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

    static contextTypes = {
        user: PropTypes.string,
        lang: PropTypes.string,
        localization: PropTypes.obj,
        localize: PropTypes.func
    }

    componentWillReceiveProps({isOpen, article, loadArticleComments}) {
        if (isOpen && !this.props.isOpen &&
            !article.loadedComments && !article.loadingComments) loadArticleComments(article.id)
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
        const { localize, localization, lang } = this.context
        return <a href="#" onClick = {this.props.toggleOpen}>
            {this.props.isOpen ? localize('hide', lang, localization) : localize('show', lang, localization)} {localize('comments', lang, localization)}
        </a>
    }

    getBody() {
        const { comments, article, isOpen, addComment } = this.props
        const { localize, localization, lang } = this.context
        if (!isOpen) return null
        if (article.loadingComments || !article.loadedComments) return <Loader />
        const form = <NewCommentForm addComment={(comment) => addComment(article.id, comment)} />
        if (!comments.length) return <div><p>{localize('noCommentsYet', lang, localization)}</p>{form}</div>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <div>
                <b>{localize('user', lang, localization)}: {this.context.user}</b>
                <ul>{commentItems}</ul>
                {form}
            </div>
        )
    }
}

export default connect((storeState, props) => {
    return {
        comments: props.article.comments.map(id => storeState.comments.getIn(['entities', id]))
    }
}, { addComment, loadArticleComments },
    null,
    {pure: false}
)(toggleOpen(CommentList))
