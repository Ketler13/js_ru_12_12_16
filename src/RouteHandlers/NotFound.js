import React, { Component, PropTypes } from 'react'

class NotFound extends Component {
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
                <h3>{localize('pageNotFound', lang, localization)}</h3>
            </div>
        )
    }
}

export default NotFound
