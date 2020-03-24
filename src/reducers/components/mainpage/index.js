export default (state = {}, action) => {
    if (action.type === 'UPDATE_PAGE') {
        return { id: action.payload }
    } else if (action.type === 'SWITCH_MAIN') {
        return
    }
    return state
}