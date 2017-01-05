import { articles } from '../fixtures'
import { DELETE_ARTICLE, FILTERED_ARTICLES, SHOW_ALL } from '../constants'
import selected from './selected'

const initialState = {
  articles: articles
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SHOW_ALL:
      return state.articles
    case DELETE_ARTICLE:
      return state.filter(article => article.id !== payload.id)
    case FILTERED_ARTICLES:
      return state.filter(article => article.title === payload.label)
  }
  return state.articles
}
