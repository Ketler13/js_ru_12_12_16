import { ADD_COMMENT } from '../constants'
import { fromJS, toJS } from 'immutable'

export default store => next => action => {
    const { type, payload } = action

    if (type === ADD_COMMENT) {
        const newId = Date.now()
        const immutableAction = fromJS(action).setIn(["payload", "id"], newId)
        const newAction = immutableAction.toJS()
        
        next(newAction)
    } else {
        next(action)
    }
}
