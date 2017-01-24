import React, { Component, PropTypes } from 'react'

class Menu extends Component {
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
                <h3>{localize('selectPath', lang, localization)}</h3>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export default Menu
