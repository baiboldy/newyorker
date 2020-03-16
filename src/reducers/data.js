import { uuid } from 'uuidv4'

const initialState = [
    {
        id: uuid,
        name: 'Adams',
        surname: 'Mark',
        age: 18,
    },
    {
        id: uuid,
        name: 'Smith',
        surname: 'Milan',
        age: 26
    }
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