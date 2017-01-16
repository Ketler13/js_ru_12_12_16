import { OrderedMap, fromJS, toJS } from 'immutable'

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
    //обрати внимание, comments - обычный массив, значит ты мутируеш стейт
    comments.push(id)
    return articlesState.setIn([articleId, 'comments'], comments)
}

export function addIdToNewComment(action) {
    const { type, payload } = action
    const newId = Date.now()
    const immutableAction = fromJS(action).setIn(["payload", "id"], newId)
    const newAction = immutableAction.toJS()
    return newAction
}
