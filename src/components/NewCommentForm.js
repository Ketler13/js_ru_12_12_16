import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    static propTypes = {
        addComment: PropTypes.func
    }

    state = {
        id: null,
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
        const { articleId } = this.props
        this.props.addComment(this.state.id, this.state.user, this.state.text, articleId)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default NewCommentForm
