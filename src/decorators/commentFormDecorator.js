import React from 'react'
//с этим ты перемудрил. Нет никакого смысла делать декоратор для коммент-формы, Ты же не будешь его переиспользовать
export default (Component) => class CommentFormDecorator extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      commentText: ''
    }
  }

  render() {
    return (
      <Component state = {this.state} inputChange = {this.inputChange} addCmnt = {this.addCmnt}/>
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
