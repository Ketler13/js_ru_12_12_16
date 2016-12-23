import React, { Component, PropTypes }  from 'react'

export default class CommentAdder extends Component {
  state = {
    username: '',
    commentText: ''
  }

  render() {
    return (
      <form>
        <p>Enter your nickname:</p>
        <p><input type="text" name="user" onChange={this.userChange} /></p>
        <p>Enter your comment:</p>
        <p><textarea rows="2" cols="45" name="text" onChange={this.commentChange}></textarea></p>
        <p><input type="button" value="Send comment" onClick = {this.addCmnt} /></p>
      </form>
    )
  }

  userChange = (ev) => {
    console.log(ev.target.name)
    this.setState({
      username: ev.target.value
    })
  }

  commentChange = (ev) => {
    this.setState({
      commentText: ev.target.value
    })
  }

  addCmnt = (ev) => {
    if (this.state.username && this.state.commentText) {
      console.log(`User ${this.state.username} send a comment: ${this.state.commentText}`)
    }
  }
}
