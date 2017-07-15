import React from 'react'
import { connect } from 'react-redux'
import LinkButton from '../components/link-button'
import { SET_LAT_TEXT, SET_LONG_TEXT } from '../constants'

const MapPage = props => {
  return (
    <div>
      <main>
        <h1 className="pa2 tc">MapPage</h1>
        <form className="pa2">
          <label>
            Latitude: <br />
          </label>
          <input type="text" onChange={props.setLat} value={props.latText} />
          <br />
          <label>
            Longitude: <br />
          </label>
          <input type="text" onChange={props.setLong} value={props.longText} />
        </form>
      </main>
    </div>
  )
}

const connector = connect(mapStatetoProps, mapDispatchtoProps)

function mapStatetoProps(state) {
  return {
    latText: state.form.lat_text,
    longText: state.form.long_text
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    setLat: e => dispatch({ type: SET_LAT_TEXT, payload: e.target.value }),
    setLong: e => dispatch({ type: SET_LONG_TEXT, payload: e.target.value })
  }
}

export default connector(MapPage)
