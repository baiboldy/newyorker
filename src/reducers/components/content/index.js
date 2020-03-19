import { uuid } from 'uuidv4'

const init = [
    {
        id: uuid(),
        videoId: '28454',
        active: true
    },
    {
        id: uuid(),
        videoId: '12409',
        active: false
    }
]

export default (state = init, action) => {
    if (action.type === 'ADD_VIDEO') {
        return [
            ...state,
            {
                id: uuid(),
                videoId: action.payload,
                active: true
            }
        ]
    } else if (action.type === 'UPDATE_ACTIVE_VIDEO') {
        const videos = state.reduce((acc, cur) => { if (cur.videoId === action.payload) { return [...acc, { ...cur, active: true }] } return [...acc, { ...cur, active: false }] }, [])
        return videos
    }
    return state
}