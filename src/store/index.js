import {createStore,applyMiddleware} from 'redux'

import reducer from './reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise'

let store = createStore(reducer, applyMiddleware(promise));
window.store=store;

export default store;