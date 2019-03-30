import {combineReducers} from 'redux'
import header from './header'
import list from './list'
import article from './article'
export default combineReducers({
    header,
    list,
    article,
})