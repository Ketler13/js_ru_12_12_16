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
    error: [],
    loading: [],
    loaded: [],
    entities: new OrderedMap({})
})

const defaultState = arrayToMap(normalizedComments, CommentModel)

export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response, randomId } = action
    //const { articleId } = payload
    //console.log(state.loading)

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentModel({...payload.comment, id: randomId}))

        case LOAD_COMMENTS + START:
            return state.updateIn(['loading'], loading => loading.concat(payload.articleId))

        case LOAD_COMMENTS + SUCCESS:
            return state
                .mergeIn(['entities'], arrayToMap(response, CommentModel))
                .updateIn(['loaded'], loaded => loaded.concat(payload.articleId))
                .updateIn(['loading'], loading =>
                loading.filter(item => !loading.includes(item)))
    }

    return state
}
