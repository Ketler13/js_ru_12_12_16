import React, { Component, PropTypes } from 'react'

class ErrorPage extends Component {
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
                <h1>{localize('errorPage', lang, localization)}</h1>
                <h3>{this.props.location.query.message}</h3>
            </div>
        )
    }
}

export default ErrorPage
