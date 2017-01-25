import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from '../components/Comment'
import { loadCommentsForPage } from '../AC'
import Loader from './Loader'

class CommentsPage extends Component {
    static propTypes = {
        page: PropTypes.number.isRequired,
        //From redux connect:
        comments: PropTypes.object,
        total: PropTypes.number
    };

    //тут и в других местах: лучше сделай вукоратор либо компонент-обертку для локализации, чтоб не обращатся кажды раз к контексту, иначе потом тяжело будет что-либо поменять
    static contextTypes = {
        lang: PropTypes.string,
        localization: PropTypes.obj,
        localize: PropTypes.func
    }

    componentDidMount() { checkAndLoad(this.props) }

    componentWillReceiveProps = checkAndLoad

    render() {
        const { total, comments, page } = this.props
        const { localize, localization, lang } = this.context
        if (!total) return <Loader />
        if ( (page - 1) * 5 >= total ) return <h3>{localize('noCommentsYet', lang, localization)}</h3>
        if (!comments || !comments.size) return <Loader />

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return (
            <ul>
                {commentItems}
            </ul>
        )
    }
}

function checkAndLoad(props) {
    const { page, comments, loadCommentsForPage } = props
    if (!comments) loadCommentsForPage(page)
}

export default connect((state, props) => {
    const pageIds = state.comments.getIn(['pagination', props.page])
    const total = state.comments.total
    const comments = pageIds && pageIds.map(id => state.comments.getIn(['entities', id]))
    return { comments, total }
}, { loadCommentsForPage })(CommentsPage)
