import { INCREMENT, DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES,
LOAD_ARTICLE, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import $ from 'jquery'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function addComment(articleId, comment) {
    return {
        type: ADD_COMMENT,
        payload: { articleId, comment },
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticleById(id) {
    return (dispatch, getState) => {
        if (getState().articles.getIn(['entities', id, 'text'])) return null

        dispatch({
            type: LOAD_ARTICLE + START,
            payload: { id }
        })

        $.get(`/api/article/${id}`)
            .done(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: { id },
                response
            }))
            .fail(error => dispatch({
                type: LOAD_ARTICLE + FAIL,
                payload: { id },
                error
            }))
    }
}

export function loadCommentsByArticleId(id) {
    // return (dispatch, getState) => {
    //     if (getState().articles.getIn(['entities', id])) return null
    //
    //     dispatch({
    //         type: LOAD_COMMENTS + START,
    //         payload: {id}
    //     })
    //
    //     $.get(`/api/comment?article=${id}`)
    //         .done(response => dispatch({
    //             type: LOAD_COMMENTS + SUCCESS,
    //             payload: { id },
    //             response
    //         }))
    //         .fail(error => dispatch({
    //             type: LOAD_COMMENTS + FAIL,
    //             payload: {id},
    //             error
    //         }))
    // }
    return {
        type: LOAD_COMMENTS,
        payload: { id },
        callAPI: `/api/comment?article=${id}`
    }
}
