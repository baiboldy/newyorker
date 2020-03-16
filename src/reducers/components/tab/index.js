import { uuid } from 'uuidv4'

const initialState = [
    {
        id: uuid(),
        name: 'Главная страница'
    },
    {
        id: uuid(),
        name: 'Новости'
    }
]

export default (state = initialState, action) => {
    if (action.type === 'ADD_TAB') {
        return [
            ...state,
            {
                id: uuid(),
                name: action.payload,
            }
        ]
    } else if (action.type === 'DELETE_TAB') {
        return state.filter(i => i.id !== action.payload)
    }
    return state
}