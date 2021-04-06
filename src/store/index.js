import {createStore,combineReducers, applyMiddleware} from 'redux'
import {jawabanReducers} from './reducers/jawabanReducers'
import {soalReducers} from './reducers/soalReducer'
import thunk from 'redux-thunk'

const rootReduser = combineReducers({
    soal: soalReducers,
    jawaban: jawabanReducers
})

export const store = createStore(rootReduser,applyMiddleware(thunk))