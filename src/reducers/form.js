import { merge } from 'ramda'
import { SET_LAT_TEXT, SET_LONG_TEXT } from '../constants'

export default (
  state = { lat_text: 'hello world', long_text: 'hotdog' },
  action
) => {
  switch (action.type) {
    case SET_LAT_TEXT:
      return merge(state, { lat_text: action.payload })
    case SET_LONG_TEXT:
      return merge(state, { long_text: action.payload })
    default:
      return state
  }
}
