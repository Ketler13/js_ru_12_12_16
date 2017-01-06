import articlesReducer from './articles'
import { articles } from '../fixtures'
import { FILTER_BY_SELECT, DELETE_ARTICLE } from '../constants'
import { showAll } from '../AC'


const initialState = articlesReducer(undefined, showAll)

export default (articlesState = initialState, action) => {
  const { type, payload } = action
  let selectedArticles = []

  if (articlesState.length === 0) return initialState

  switch (type) {
    case FILTER_BY_SELECT:
      //if (articlesState.length === 0) return articlesReducer(undefined, showAll)
        for (let i = 0; i < payload.selectedLabels.length; i++) {
          selectedArticles = selectedArticles.concat(initialState.filter(article => article.title === payload.selectedLabels[i]))
        }
        if (articlesState.length === 0) return initialState
        return selectedArticles

    case DELETE_ARTICLE:
      return articlesState.filter(article => article.id !== payload.id)

    default:
      return articlesState

  }
}
