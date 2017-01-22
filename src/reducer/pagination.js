import { LOAD_ALL_COMMENTS, LOAD_COMMENTS_FROM_STORE, START, SUCCESS } from '../constants'
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
    loading: false,
    idsToLoad: [],
    isPageLoaded: false,
    entities: new OrderedMap({})
})

export default (state = new DefaultReducerState({}), action) => {
    const { type, payload, response } = action
    const comments = response ? response.records : null
    const { commentsPerPage, offset, currentPage, idsToLoad, isPageLoaded } = payload ? payload : state

    switch (type) {
        case LOAD_ALL_COMMENTS + START:
        return state
            .set('commentsPerPage', commentsPerPage)
            .set('offset', offset)
            .set('currentPage', currentPage)
            .set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .mergeIn(['entities'], arrayToMap(comments, CommentModel))
                .set('loading', false)
                .set('idsToLoad', [])
                .set('isPageLoaded', false)

        case LOAD_COMMENTS_FROM_STORE:
            return state.set('isPageLoaded', isPageLoaded)
                    .set('idsToLoad', idsToLoad)
    }

    return state
}
