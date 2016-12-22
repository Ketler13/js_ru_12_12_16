//decorator === HOC(Higher Order Component)
import React, {Component} from 'react'

export default function accordion(Component) {
    return class ComposedComponent extends Component {
        state = {
            //суть декораторов в переисползовании кода, не привязывайся к названиям сущностей. Лучше openItemId
            openItemId: null
        }
        render() {
            return <Component {...this.props} {...this.state} accordion = {this.accordion}/>
        }

        accordion = id => ev => {
            ev && ev.preventDefault && ev.preventDefault()
            const openedItemId = this.state.openItemId === id ? null : id
            this.setState({
                openItemId: openedItemId
            })
        }

    }
}
