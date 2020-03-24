import { uuid } from 'uuidv4'

const initialState = [
    {
        id: uuid(),
        name: 'Главная страница',
        active: true,
        tag: '#main'
    },
    {
        id: uuid(),
        name: 'Новости',
        active: false,
        tag: '#news'
    }
]

export default (state = initialState, action) => {
    if (action.type === 'ADD_TAB') {
        return [
            ...state,
            {
                id: action.payload.id,
                name: action.payload.name,
                active: false,
            }
        ]
    } else if (action.type === 'DELETE_TAB') {
        return state.filter(i => i.id !== action.payload)
    } else if (action.type === 'UPDATE_ACTIVE_TAB') {
        let tab = [];
        if (action.payload) {
            tab = state.reduce((acc, cur) => {
                if (cur.id === action.payload) {
                    return [...acc, { ...cur, active: true }]
                }
                return [...acc, { ...cur, active: false }]
            }, [])
        } else {
            tab = state.reduce((acc, cur) => {
                if (cur.tag && cur.tag === '#main') {
                    return [...acc, { ...cur, active: true }]
                }
                return [...acc, { ...cur, active: false }]
            }, [])
        }
        return tab
    }
    return state
}