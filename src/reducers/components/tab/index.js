import { uuid } from 'uuidv4'

const initialState = [
    {
        id: uuid(),
        name: 'Главная страница',
        active: true,
        videoId: '28454',
    },
    {
        id: uuid(),
        name: 'Новости',
        active: false,
        videoId: '12409',
    }
]

export default (state = initialState, action) => {
    if (action.type === 'ADD_TAB') {
        return [
            ...state,
            {
                id: uuid(),
                name: action.payload,
                active: true,
                videoId: '835877',
            }
        ]
    } else if (action.type === 'DELETE_TAB') {
        return state.filter(i => i.id !== action.payload)
    } else if (action.type === 'UPDATE_ACTIVE_TAB') {
        const tab = state.reduce((acc, cur) => { if (cur.id === action.payload) { return [...acc, { ...cur, active: true }] } return [...acc, { ...cur, active: false }] }, [])
        return tab
    }
    return state
}