const initState = {
    isOpen: false
}

export default (state = initState, action) => {
    if (action.type === 'CHANGE_NAVIGATOR_STATE') {
        return {
            ...state,
            isOpen: !state.isOpen
        }
    }
    return state
}