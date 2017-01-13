import { ADD_COMMENT } from '../constants'

export default store => next => action => {
    const { type, payload } = action
    let newAction = {}
    const newId = Date.now()
    console.log(action.payload)
    if (type === ADD_COMMENT) {
        newAction = {
            ...action,
            payload: {
                ...payload,
                id: newId
            }
        }
    }
    next(newAction)
}
