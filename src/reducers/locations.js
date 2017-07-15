import { append } from 'ramda'
import { SET_LOCATIONS, ADD_LOCATION_TO_LOCATIONS } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return action.payload
    case ADD_LOCATION_TO_LOCATIONS:
      return append(action.payload, state)
    default:
      return state
  }
}
