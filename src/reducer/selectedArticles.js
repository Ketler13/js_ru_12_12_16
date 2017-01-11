import articlesReducer from './articles'
import { FILTER_BY_SELECT, DELETE_ARTICLE, FILTER_BY_DATE } from '../constants'
import { showAll } from '../AC'
import { articles } from '../fixtures'

const initialState = articlesReducer(undefined, showAll)
//этот редюсер убрать. У тебя есть значения фильтров и все статьи. Пофильтровать сможешь там, где нужен будет список 
export default (articlesState = initialState, action) => {
  const { type, payload } = action
  let selectedArticles = []

  if (articlesState.length === 0) return initialState.filter(z => true)

  switch (type) {
    case FILTER_BY_SELECT:
      for (let i = 0; i < payload.selectedLabels.length; i++) {
        selectedArticles = selectedArticles.concat(initialState.filter(article => article.title === payload.selectedLabels[i]))
      }
      if (articlesState.length === 0) return initialState.filter(k => true)
      return selectedArticles

    case DELETE_ARTICLE:
    //return articlesState
       return articlesState.filter(article => article.id !== payload.id)

    case FILTER_BY_DATE:
      const { from, to } = payload
      const fromMS = Date.parse(from)
      const toMS = Date.parse(to)
      if (fromMS && toMS) {
        return articlesState.filter(article => {
          return (Date.parse(article.date) >= fromMS && Date.parse(article.date) <= toMS)
        })
      } else return initialState.filter(s => true)

    default:
      return articlesState

  }
}
