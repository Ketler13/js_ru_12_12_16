import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import commentIdGenerator from '../middlewares/commentIdGenerator'

const enhancer = applyMiddleware(commentIdGenerator,logger)

const store = createStore(reducer, {}, enhancer)
//not for prod
window.store = store

export default store
