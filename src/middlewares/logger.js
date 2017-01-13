export default store => next => action => {
    //console.log('before', store.getState())
    //console.log('---', 'dispatching', action
    console.log(action.payload)
    next(action)
    //console.log('after', store.getState().comments)
}
