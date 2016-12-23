import React, { Component, PropTypes } from 'react'
import Range from './Range'
import toggleOpen from '../../decorators/toggleOpen'

class Calendar extends Component {
  render() {
    return (
      <div>
        {this.getToggleButton()}
        {this.getCalendar()}
      </div>
    )
  }

  getToggleButton() {
    return (
      <button onClick={this.props.toggleOpen}>
        {this.props.isOpen ? 'Hide' : 'Show'} calendar
      </button>
    )
  }

  getCalendar() {
    const {isOpen} = this.props
    if (!isOpen) return null
    return <Range />
  }
}

export default toggleOpen(Calendar)
