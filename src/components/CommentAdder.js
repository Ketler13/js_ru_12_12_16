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
        <p><input type="text" name="username" value={this.state.username} onChange={this.inputChange} /></p>
        <p>Enter your comment:</p>
        <p><textarea rows="2" cols="45" name="commentText" value={this.state.commentText} onChange={this.inputChange}></textarea></p>
        <p><input type="button" value="Send comment" onClick = {this.addCmnt} /></p>
      </form>
    )
  }

  inputChange = (ev) => {
    const inputName = ev.target.name
    const inputValue = ev.target.value
    this.setState({
      [inputName]: inputValue
    })
  }


  addCmnt = (ev) => {
    if (this.state.username && this.state.commentText) {
      console.log(`User ${this.state.username} send a comment: ${this.state.commentText}`)
    }
    this.setState({
      username: '',
      commentText: ''
    })
  }
}
