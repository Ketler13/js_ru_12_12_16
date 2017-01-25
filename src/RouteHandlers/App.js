import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'
import { localize } from '../helpers'
import localization from '../localization'

class App extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        lang: 'en'
    }

    static childContextTypes = {
        user: PropTypes.string,
        lang: PropTypes.string,
        localization: PropTypes.obj,
        localize: PropTypes.func
    }

    getChildContext() {
        //ок, но старайся не хранить такое количество данных в контексте, лучше объедени все в один объект
        return {
            user: this.state.username,
            lang: this.state.lang,
            localization,
            localize
        }
    }

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <h1>News App</h1>
                    <p>{localize('chooseLanguage', this.state.lang, localization)}:</p>
                    <p>English <input type="button" value="en" onClick={this.changeLang}/></p>
                    <p>Русский <input type="button"  value="ru" onClick={this.changeLang}/></p>
                    <div>
                        {localize('inputUserName', this.state.lang, localization)}:
                        <input type="text" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <Menu>
                        <MenuItem path="/counter"/>
                        <MenuItem path="/articles"/>
                        <MenuItem path="/filters"/>
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    changeLang = ev => {
        this.setState({
            lang: ev.target.value
        })
    }

    handleChange = ev => {
        this.setState({
            username: ev.target.value
        })
    }
}

export default App
