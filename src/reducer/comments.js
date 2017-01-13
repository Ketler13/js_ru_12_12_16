import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record } from 'immutable'

const CommentModel = Record({
    "id": null,
    "user": null,
    "text": null
})

const defaultState = arrayToMap(normalizedComments, CommentModel)

export default (state = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case ADD_COMMENT:
            const newComment = {
                id: payload.id,
                user: payload.user,
                text: payload.text
            }
            return state.set(payload.id, newComment)
        default:
            return state
    }

    return state
}
