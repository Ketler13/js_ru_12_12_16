import { articles } from '../fixtures'

export default (articlesState = articles, action) => {
  const {payload} = action
  if (!payload) return articlesState
  else {
    return articlesState.filter(article => article.id !== payload.id)
  }
  //return articlesState
}
