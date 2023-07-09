import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Analysis from './components/Analysis'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Analysis />
      </div>
    )
  }
}

