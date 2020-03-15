const initialState = [

]

const dataList = (state = initialState, action) => {
    if (action.type === 'ADD_DATA') {
        return [
            ...state,
            action.payload
        ]
    }
    return state
}

export default dataList