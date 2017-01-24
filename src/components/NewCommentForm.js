import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    static propTypes = {
        addComment: PropTypes.func
    }

    static contextTypes = {
        lang: PropTypes.string,
        localization: PropTypes.obj,
        localize: PropTypes.func
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        const { localize, localization, lang } = this.context
        return (
            <form onSubmit = {this.handleSubmit}>
                {localize('comment', lang, localization)}: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                {localize('user', lang, localization)}: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default NewCommentForm
