import { ADD_COMMENT } from '../constants'
import { addIdToNewComment } from '../helpers'

export default store => next => action => {
    const { type } = action

    next(type === ADD_COMMENT ? addIdToNewComment(action) : action)
}
