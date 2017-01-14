import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrayToMap, mapToArray, addCommentToArticle } from '../helpers'
import { Record } from 'immutable'

const ArticleModel = Record({
    "id": null,
    "date": null,
    "title": null,
    "text": null,
    "comments": []
})

const defaultState = arrayToMap(normalizedArticles, ArticleModel)

export default (articlesState = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.id)

        case ADD_COMMENT:
            // const { id, articleId } = payload
            // const comments = articlesState.getIn([articleId, 'comments'])
            // comments.push(id)
            // return articlesState.setIn([articleId, 'comments'], comments)
            return addCommentToArticle(payload, articlesState)
    }

    return articlesState
}
