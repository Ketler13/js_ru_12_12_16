import { combineReducers } from 'redux'
import counter from './counter'
import articles from './articles'
import selectValues from './selectValues'
import selectedArticles from './selectedArticles'

export default combineReducers({
  count: counter,
  articles: articles,
  selectValues: selectValues,
  selectedArticles
})
