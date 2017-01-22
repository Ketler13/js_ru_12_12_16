import { LOAD_ALL_COMMENTS, START, SUCCESS } from '../constants'
import { arrayToMap, mapToArray } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})

const DefaultReducerState = Record({
    commentsPerPage: 5,
    offset: 0,
    currentPage: 1,
    entities: new OrderedMap({})
})

export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response } = action
    const comments = response ? response.records : null
    const { commentsPerPage, offset, currentPage } = payload ? payload : state
    //console.log(commentsPerPage, offset, currentPage)

    switch (type) {
        case LOAD_ALL_COMMENTS + START:
        return state
            .set('commentsPerPage', commentsPerPage)
            .set('offset', offset)
            .set('currentPage', currentPage)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .setIn(['entities'], arrayToMap(comments, CommentModel))
    }

    return state
}
