import React, { Component, PropTypes } from 'react'

class UserForm extends Component {
    static propTypes = {

    };

    state = {
        username: ''
    }

    render() {
        return (
            <div>
                Input username:
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