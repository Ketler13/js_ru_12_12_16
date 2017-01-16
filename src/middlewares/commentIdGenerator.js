import { ADD_COMMENT } from '../constants'
import { addIdToNewComment } from '../helpers'

export default store => next => action => {
    const { type } = action
    //через мидлвары будет проходить каждый экшин, они должны быть максимально общими, завязывать на конкретные экшины - плохая практика
    next(type === ADD_COMMENT ? addIdToNewComment(action) : action)
}
