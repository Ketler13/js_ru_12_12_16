import { OrderedMap } from 'immutable'

export function arrayToMap(arr, Model) {
    return arr.reduce((acc, entity) => {
        const model = Model ? new Model(entity) : entity
        return acc.set(entity.id, model)
    }, new OrderedMap({}))
}

export function mapToArray(immutableMap) {
    return immutableMap.valueSeq().toArray()
}

export function addCommentToList(payload, state) {
    const { id, user, text } = payload
    const newComment = {
        id,
        user,
        text
    }
    return state.set(payload.id, newComment)
}

export function addCommentToArticle(payload, articlesState) {
    const { id, articleId } = payload
    const comments = articlesState.getIn([articleId, 'comments'])
    comments.push(id)
    return articlesState.setIn([articleId, 'comments'], comments)
}
