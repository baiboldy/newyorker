export default (state = [], action) => {
    if (action.type === 'SEARCH_DATA') {
        return action.payload
    }
    return state
}