export default store => next => action => {
    //console.log('before', store.getState().comments)
    //console.log('---', 'dipatching', action)
    next(action)
    //console.log('after', store.getState())
}
