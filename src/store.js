import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import app from './reducers/app'
import locations from './reducers/locations'

const store = createStore(
  combineReducers({
    app,
    locations
  }),
  applyMiddleware(thunk)
)

export default store
