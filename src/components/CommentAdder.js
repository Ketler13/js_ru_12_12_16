import React, { Component, PropTypes }  from 'react'

export default class CommentAdder extends Component {
  render() {
    return (
      <form>
        <p>Enter your nickname:</p>
        <p><input type="text" /></p>
        <p>Enter your comment:</p>
        <p><textarea rows="2" cols="45" name="text"></textarea></p>
        <p><input type="submit" value="Send comment" onClick = {this.sendCmnt} /></p>
      </form>
    )
  }
}
