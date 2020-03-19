import { combineReducers } from 'redux'
import data from './data'
import tabs from './components/tab'
import video from './components/content'
import navigator from './components/navigator'

export default combineReducers({
    data,
    tabs,
    video,
    navigator,
})