import React, { Component, PropTypes } from 'react'

class Menu extends Component {
    static PropTypes = {

    }

    render() {
        return (
            <div>
                <h3>Select path</h3>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }

}

export default Menu
