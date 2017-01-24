import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentRoot extends Component {
    static propTypes = {

    }

    static contextTypes = {
        lang: PropTypes.string,
        localization: PropTypes.obj,
        localize: PropTypes.func
    }

    render() {
        const { localize, localization, lang } = this.context
        return (
            <div>
                <h1>{localize('commentsPagination', lang, localization)}</h1>
                {this.props.children}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentRoot
