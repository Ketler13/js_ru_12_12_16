import React, { Component, PropTypes }  from 'react'
import CommentFormDecorator from '../decorators/commentFormDecorator'
//import CommentFormInput from './CommentFormInput'

class CommentForm extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    inputChange: PropTypes.func.isRequired,
    addCmnt: PropTypes.func.isRequired
  }

  render() {
    const {username, commentText} = this.props.state
    const inputChange = this.props.inputChange
    const addCmnt = this.props.addCmnt
    return (
      <form>
        <p>Enter your nickname:</p>
        <p><input type="text" name="username" value={username} onChange={inputChange} /></p>
        <p>Enter your comment:</p>
        <p><textarea rows="2" cols="45" name="commentText" value={commentText} onChange={inputChange}></textarea></p>
        <p><input type="button" value="Send comment" onClick = {addCmnt} /></p>
      </form>
    )
  }

}

export default CommentFormDecorator(CommentForm)



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
