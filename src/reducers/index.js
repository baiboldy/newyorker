import { combineReducers } from 'redux'
import tabs from './components/tab'
import content from './components/content'
import navigator from './components/navigator'
import mainpage from './components/mainpage'
import search from './components/search'

export default combineReducers({
    tabs,
    content,
    navigator,
    mainpage,
    search,
})