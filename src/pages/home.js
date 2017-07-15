import React from 'react'
import { connect } from 'react-redux'
import LinkButton from '../components/link-button'

const Home = props =>
  <div>
    <main>
      <h1 className="pa2 tc">Home Page</h1>
      <LinkButton to={`/map`}>map</LinkButton>
    </main>
  </div>

export default Home
