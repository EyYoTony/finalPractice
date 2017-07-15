import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import app from './reducers/app'
import locations from './reducers/locations'
import form from './reducers/form'

const store = createStore(
  combineReducers({
    app,
    locations,
    form
  }),
  applyMiddleware(thunk)
)

export default store
