import { combineReducers } from 'redux'
import data from './data'
import tabs from './components/tab'
import video from './components/content'

export default combineReducers({
    data,
    tabs,
    video,
})