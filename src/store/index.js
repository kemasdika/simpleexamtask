import {createStore, applyMiddleware} from 'redux'
import {jawabanReducers} from './reducers/jawabanReducers'
import thunk from 'redux-thunk'

export const store = createStore(jawabanReducers,applyMiddleware(thunk))