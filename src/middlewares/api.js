import $ from 'jquery'
import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {
    const {callAPI, type, ...rest} = action
    console.log(store.getState().comments)
    if (!callAPI) return next(action)

    next({...rest, type: type + START})

    //dev only, remove in prod!
    setTimeout(() => {
        $.get(callAPI)
            .done(response => next({...rest, type: type + SUCCESS, response}))
            .fail(error => next({...rest, type: type + FAIL, error}))
    }, 1000)
}
