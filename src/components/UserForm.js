import React, { Component, PropTypes } from 'react'

class UserForm extends Component {
    static propTypes = {

    }

    static contextTypes = {
        lang: PropTypes.string,
        localization: PropTypes.obj,
        localize: PropTypes.func
    }

    state = {
        username: ''
    }

    render() {
        const { localize, localization, lang } = this.context
        return (
            <div>
                {localize('inputUserName', lang, localization)}:
                <input type="text" value={this.state.username} onChange={this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length <= 10) {
            this.setState({
                username: ev.target.value
            })
        }
    }
}

export default UserForm
