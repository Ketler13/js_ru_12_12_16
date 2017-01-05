import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import articlesReducer from './articlesReducer'

export default combineReducers({
  count: counterReducer,
  articles: articlesReducer
})
