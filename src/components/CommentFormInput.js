import React, { Component, PropTypes } from 'react'

export default class CommentFormInput extends Component {

  render() {
    const {type, value, onClick, onChange, label, state} = this.props
    console.log(state)
    return (
      <div>
        <p>{label}</p>
        <p><input type={type} value={value} onClick={onClick} onChange={onChange} /></p>
      </div>
    )
  }

}
