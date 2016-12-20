//decorator === HOC(Higher Order Component)
import React, {Component} from 'react'

export default function accordion(Component) {
    return class ComposedComponent extends Component {
        state = {
            openArticleId: null
        }
        render() {
            return <Component {...this.props} {...this.state} accordion = {this.accordion}/>
        }

        accordion = id => ev => {
            ev && ev.preventDefault && ev.preventDefault()
            const openedArticleId = this.state.openArticleId === id ? null : id
            this.setState({
                openArticleId: openedArticleId
            })
        }

    }
}
