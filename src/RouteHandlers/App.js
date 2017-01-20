import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'

class App extends Component {
    static PropTypes = {

    }

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <h1>News app</h1>
                    <Menu>
                        <MenuItem path='/counter' />
                        <MenuItem path='/filters' />
                        <MenuItem path='/articles' />
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default App
