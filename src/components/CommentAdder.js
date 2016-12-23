import React, { Component, PropTypes }  from 'react'
//import CommentFormInput from './CommentFormInput'

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


  addCmnt = () => {
    if (this.state.username && this.state.commentText) {
      console.log(`User *${this.state.username}* send a comment: ${this.state.commentText}`)
    }
    this.setState({
      username: '',
      commentText: ''
    })
  }
}



// <form>
//   <CommentFormInput
//     type={"text"}
//     value={this.state.username}
//     name="username"
//     onChange={this.inputChange}
//     label="Enter your nickname:"
//     state={this.state}
//   />
//   <CommentFormInput
//     type={"text"}
//     value={this.state.commentText}
//     name="commentText"
//     onChange={this.inputChange}
//     label="Enter your comment:"
//     state={this.state}
//   />
//   <CommentFormInput
//     type={"button"}
//     value="Send comment"
//     name="commentButton"
//     onClick={this.addCmnt}
//     state={this.state}
//   />
// </form>

//<CommentFormInput inputType={"button"} value={"Send"} label={"Send message"} onClick={this.test}/>
