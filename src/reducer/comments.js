import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrayToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})

const DefaultReducerState = Record({
    error: null,
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
})

export default (commentsState = new DefaultReducerState({}), action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case LOAD_COMMENTS + START:
            return commentsState.set('loading', true)

        case LOAD_COMMENTS + SUCCESS:
            return commentsState
                .mergeIn(['entities'], arrayToMap(response, CommentModel))
                .set('loading', false)
                .set('loaded', true)
                .set('error', null)

        case LOAD_COMMENTS + FAIL:
            return commentsState
                .set('error', error)
                .set('loading', false)
    }

    return commentsState
}

// const defaultState = arrayToMap(normalizedComments, CommentModel)
//
// export default (state = defaultState, action) => {
//     const { type, payload, randomId } = action
//
//     switch (type) {
//         case ADD_COMMENT:
//             return state.set(randomId, new CommentModel({...payload.comment, id: randomId}))
//     }
//
//     return state
// }
