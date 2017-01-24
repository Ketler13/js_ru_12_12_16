import React, { Component, PropTypes } from 'react'

class ArticleIndexPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        lang: PropTypes.string,
        localization: PropTypes.obj,
        localize: PropTypes.func
    }

    render() {
        const { localize, localization, lang } = this.context
        return (
            <div>
                <h2>{localize('pleaseSelectArticle', lang, localization)}</h2>
            </div>
        )
    }
}

export default ArticleIndexPage
