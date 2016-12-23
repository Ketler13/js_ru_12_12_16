import React, { Component, PropTypes } from 'react'
import Range from './Range'
import toggleOpen from '../../decorators/toggleOpen'
import CSSTransition from 'react-addons-css-transition-group'

class Calendar extends Component {
  static propTypes = {
      isOpen: PropTypes.bool,
      onClick: PropTypes.func
  }

  render() {
    return (
      <div>
        {this.getToggleButton()}
        <CSSTransition
          transitionName="article-body"
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100}
        >
          {this.getCalendar()}
        </CSSTransition>
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
