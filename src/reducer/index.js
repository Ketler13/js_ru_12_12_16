import { combineReducers } from 'redux'
import counter from './counter'
import articles from './articles'
import selected from './selected'

export default combineReducers({
  count: counter,
  articles: articles,
  selected: selected
})
